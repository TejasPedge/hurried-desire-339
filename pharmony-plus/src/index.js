import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { colorThemes } from './Theming/Customtheming';
import { extendTheme } from "@chakra-ui/react"
import { Navstyle } from './Theming/Customtheming';
import breakpointss from './Breakpoints/Breakpoints';

const root = ReactDOM.createRoot(document.getElementById('root'));

const colortheme =  colorThemes();

const theme = extendTheme({...colortheme,breakpoints : {...breakpointss}});

root.render(
  
 <ChakraProvider theme = {theme}>

 <BrowserRouter>

    <App />

 </BrowserRouter>
 
 </ChakraProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
