import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from './Routes';
import { createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { create } from "jss";
import rtl from "jss-rtl";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
    direction: "rtl"
});

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Routes/>
            </Switch>
        </BrowserRouter>
        )
    }

render(<StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StylesProvider>,document.getElementById('root'));
