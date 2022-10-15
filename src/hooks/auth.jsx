import React, {useState, useContext, createContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {gql, useMutation} from "@apollo/client";
import "../lib/fclConfig"
import * as fcl from "@onflow/fcl"
import * as types from "@onflow/types";
import {signatureTx} from "../cadance/tansactions/Signature"
// import {config} from "@onflow/fcl";


// config()
//     .put("app.detail.title", process.env.REACT_APP_WALLET_TITLE)
//     .put("app.detail.icon", process.env.REACT_APP_WALLET_ICON)
//     .put("discovery.wallet", process.env.REACT_APP_WALLET_DISCOVERY)
//     .put("accessNode.api", process.env.REACT_APP_WALLET_ACCESS_API_URL)
//     .put("discovery.wallet.method", "TAB/RPC");


const authContext = createContext()

export function AuthProvider({ children }) {
    const auth = useProvideAuth()

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)
}


/**
 * GraphQL Mutation to get Message Token
 */
const GET_MESSAGE = gql`
          mutation GetMessage($address: String!) {
            getSignatureMessageToken(address: $address) {
              token
              expires
            }
          }
        `;

/**
 * GraphQL Mutation to get Access Token
 */
const GET_ACCESS_JWT = gql`
          mutation GetAccessToken($signature: String!) {
            verifySignature(signature: $signature) {
              user {
                id
                name
                surname
                address
                avatar
                createdAt
              }
              accessToken {
                token
                expires
              }
              refreshToken {
                token
                expires
              }
            }
          }
        `;

/**
 * GraphQL Mutation to get Refreshh Token
 */
const REFRESH_JWT = gql`
          mutation RefreshToken($token: String!) {
            verifySignature(token: $token) {
              user {
                id
                name
                surname
                address
                avatar
                createdAt
              }
              accessToken {
                token
                expires
              }
              refreshToken {
                token
                expires
              }
            }
          }
        `;

const useProvideAuth = (props) => {
    const navigate = useNavigate();

    const [authToken, setAuthToken] = useState(null)
    const [refreshAuthToken, setRefreshAuthToken] = useState(null)
    const [user, setUser] = useState({loggedIn: null});

    const [messageToken, setMessageToken] = useState(null);
    const [provedMessageTX, setProvedMessageTX] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(false);
    const [updateState, setUpdateState] = useState(false);

    useEffect(() => {
        const storageSessionUser = JSON.parse(localStorage.getItem('CURRENT_USER'))
        if(storageSessionUser) {
            console.log('User entered: ', storageSessionUser);
            setUser(storageSessionUser);
            sessionStorage.setItem('CURRENT_USER', JSON.stringify(storageSessionUser));
        }

        // fcl.currentUser.subscribe(setUser);
    }, []);


    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem('User'));

        if(user.loggedIn && localStorageUser) {
            if(checkToken(localStorageUser.accessToken)) {
                console.log('Setting up access Token')
                setAuthToken(localStorageUser);
            } else if(checkToken(localStorageUser.refreshToken)) {
                console.log('Refreshing Token')
                refreshToken(localStorageUser.refreshToken);
            } else {
                console.log('If Token Expired: Sign in.', localStorageUser)
                authenticateUser();
            }

        } else if (user.loggedIn && authToken == null) {
            console.log('Sign in.')
            authenticateUser();
        }
    }, [user]);

    const [
        getMessage
    ] = useMutation(GET_MESSAGE);

    const [
        getAccessJWT
    ] = useMutation(GET_ACCESS_JWT);

    const [
        refreshTokenGQL
    ] = useMutation(REFRESH_JWT);

    const isSignedIn = () => {
        if (user.loggedIn && authToken) {
            // console.log('isSignedIn: ', user);
            return true
        } else {
            return false
        }
    }

    const getAuthHeaders = () => {
        if (!authToken) return null

        return {
            authorization: `Bearer ${authToken}`,
        }
    }

    const refreshToken = async (token) => {
        try {
            setIsAuthLoading(true);
            const results = refreshTokenGQL({variables: {token: token.token}})
            console.log('Result: ', results);
            setAuthToken(JSON.stringify(results));
            setIsAuthLoading(false);
        } catch (e) {
            console.log('Error: ', e);
            setIsAuthLoading(false);
            signOut();
        }
    }

    const authenticateUser = async () => {
        setIsAuthLoading(true);
        try {
            const message = await getMessage({variables: {address: user.addr}});
            const resMessageToken = message.data.getSignatureMessageToken.token;
            console.log('resMessageToken: ', message.data.getSignatureMessageToken);
            setMessageToken(resMessageToken)

            console.log('user.services: ', user.services)

            const transactionId = await fcl.send([
                fcl.transaction(signatureTx),
                fcl.args([
                    fcl.arg(resMessageToken, types.String)
                ]),//no argus
                fcl.proposer(fcl.authz),
                fcl.payer(fcl.authz),
                fcl.authorizations([fcl.authz]),
                fcl.limit(9999)
            ]).then(fcl.decode);

            setProvedMessageTX(transactionId);
            console.log(transactionId);

            const accessToken = await getAccessJWT({variables: {signature: transactionId}});
            console.log('accessToken: ', accessToken.data.verifySignature);

            const resAccessToken = accessToken.data.verifySignature
            setAuthToken(resAccessToken);

            await localStorage.setItem('User', JSON.stringify(resAccessToken));

            console.log(' We are here')

            setIsAuthLoading(false);
            navigate('/collection')

        } catch (e) {
            console.log('Error Login: ', e)
            // signOut();
            setIsAuthLoading(false);
        }
    }

    const signOut = async () => {
        fcl.unauthenticate();
        setAuthToken(null);
        await localStorage.removeItem('User');
        await localStorage.removeItem('CURRENT_USER');
        await sessionStorage.removeItem('CURRENT_USER');
        window.location.href = process.env.REACT_APP_LOGOUT_REDIRECT_URL;
    }

    const signIn = async () => {
        setIsAuthLoading(true);

        const currentUser = await fcl.authenticate({redir: true});
        console.log('currentUser: ', currentUser)
        currentUser.services[1].method = 'TAB/RPC';
        setUser(currentUser);
        localStorage.setItem('CURRENT_USER', JSON.stringify(currentUser));
    }

    const checkToken = (token) => {
        console.log('Exp: ', new Date(parseInt(token.expires)))
        return new Date(parseInt(token.expires)) > new Date();
    }

    return {
        setAuthToken,
        isSignedIn,
        signIn,
        signOut,
        isAuthLoading,
        user
    }
}


// export default useProvideAuth;
