import { createGlobalStyle } from "styled-components";


import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

export const GlobalStyle = createGlobalStyle`

    :root{
    /*colors*/
    --darkBlue_1: #3B447A;
    --darkBlue_2: #1e254e;
    --mediumSlateBlue: #6C62E2;
    --lightBlue_1: #F3F1Fe;
    --lightBlue_2: #6884e0;
    --white: #FFFFFF;
    --black: #000000;
}

html{
    font-size: 10px;
}

body{
    font-family: 'Poppins', sans-serif;
    background-color: ${({theme}) => theme.light};
    transition: background-color .3s ease;
}

*, *::after, *::before{
    margin: 0; padding: 0; 
    box-sizing: border-box;
}
a{
    text-decoration: none;
    cursor: pointer;
 
}
ul, li{
    list-style: none;
}

img, svg{
    width: 100%;
    height: 100%;
}

`

export const lightTheme = {
    light: '#F3F1Fe',
    dark: '#1e254e'
}



export const darkTheme = {
    light: '#1e254e',
    dark: '#F3F1Fe'
    
}
 
   
   


