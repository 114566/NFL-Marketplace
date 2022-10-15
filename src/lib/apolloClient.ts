import {ApolloClient, HttpLink, InMemoryCache, from} from '@apollo/client'
import {concatPagination} from '@apollo/client/utilities'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import {useMemo} from 'react'
import {setContext} from '@apollo/client/link/context';
import {onError} from "@apollo/client/link/error";

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient

const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const User = JSON.parse(localStorage.getItem('User'));
    const accessToken = User ? `Bearer ${User.accessToken.token}` : "";
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: accessToken,
        }
    }
});


// Log any GraphQL errors or network error that occurred
const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({message, locations, path, extensions}) => {
            if (extensions.code === 'UNAUTHENTICATED') {
                localStorage.removeItem('User');
                localStorage.removeItem('CURRENT_USER');
                sessionStorage.removeItem('CURRENT_USER');
                window.location.href = process.env.REACT_APP_LOGOUT_REDIRECT_URL
            }
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, extensions: ${extensions.code}`
            )
        });
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
    // Server URL (must be absolute)
    uri: process.env.REACT_APP_GRAPHQL_SERVER_URL,
    // Additional fetch() options like `credentials` or `headers`
    credentials: 'same-origin',
})

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: authLink.concat(from([errorLink, httpLink])),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        allPosts: concatPagination(),
                    },
                },
            },
        }),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'ignore',
            },
            query: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'all',
            },
        }
    })
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()

        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = merge(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter((d) =>
                    sourceArray.every((s) => !isEqual(d, s))
                ),
            ],
        })

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data)
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function addApolloState(client, pageProps) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    }

    return pageProps
}

export function useApollo() {
    const state = null
    const store = useMemo(() => initializeApollo(state), [state])
    return store
}
