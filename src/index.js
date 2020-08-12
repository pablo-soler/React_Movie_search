import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import { Provider } from 'react-redux';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';


const theme = createMuiTheme({
    typography: {
        h2: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize:"10vw",
          fontWeight:"100",
        },
        h6: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize:"1rem",
          fontWeight:"700",
        },
        subtitle1: {
         fontFamily: 'Roboto, sans-serif',
          fontSize:"0.9rem",
          fontWeight:"500",
        },
        h4: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize:"3vw",
            fontWeight:"100",
        },
        h3: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize:"1.6vw",
            fontWeight:"100",
        },
        h5: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize:"2rem",
            fontWeight:"700",
        }

    },

    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "rgba(30, 30, 30, 1)",
            "default": "rgba(30, 30, 30, 1)"
        },
        "primary": {
            "light": "rgba(93, 255, 185, 1)",
            "main": "rgba(0, 245, 185, 1)",
            "dark": "rgba(17, 197, 159, 1)",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "rgba(93, 255, 185, 1)",
            "main": "rgba(0, 245, 185, 1)",
            "dark": "rgba(17, 197, 159, 1)",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(255, 255, 255, 0.87)",
            "secondary": "rgba(255, 255, 255, 0.54)",
            "disabled": "rgba(255, 255, 255, 0.38)",
            "hint": "rgba(255, 255, 255, 0.38)"
        }
    }
    
});

ReactDOM.render(
    <Provider store={configureStore()}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
