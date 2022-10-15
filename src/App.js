import {ThemeProvider} from "@mui/material/styles";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainView from "./layout/MainView";
import theme from "./theme";
import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import "components/common/Countdown/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import AgeGate from "components/common/AgeGate";
import {useApollo} from 'lib/apolloClient.ts';
import {ApolloProvider} from '@apollo/client';
import { AuthProvider } from 'hooks/auth';


const App = () => {
    const apolloClient = useApollo()

    useEffect(() => {
        checkCookie();
    }, []);
    const [isMajor, setIsMajor] = useState(false);

    function checkCookie() {
        let validAge = getCookie("agegate");
        if (validAge === "valid") {
            setIsMajor(true);
        }
    }

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const checkAgeGate = (val) => {
        setIsMajor(val);
    };

    const renderApp = () => {
        return (
            <BrowserRouter>
                <ApolloProvider client={apolloClient}>
                    <AuthProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline/>
                            <MainView/>
                        </ThemeProvider>
                    </AuthProvider>
                </ApolloProvider>
            </BrowserRouter>
        );
    };
    const renderAgeGate = () => {
        return <AgeGate isValid={checkAgeGate}/>;
    };
    return isMajor ? renderApp() : renderAgeGate();
};

export default App;
