import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    html{
        --primary: #31708e;
        --primaryTwo:#5da2d5;
        --secondary: #5085a5;
        --secondaryTwo:#90ccf4;
        --tertiary: #8fc1e3;
        --cta3: #7F53C9;
        --textMain: #f7f9fb;
        --text1: #04135D;
        --text2: #757095;
        --background3: #F8F9FD;
        --background4: #f4ecec;
        --background2: #CDF2F6;
        --white: #fff;
    }

    body{
        position: relative;
        background: var(--background1);
        overflow-x: hidden;
    }

    .swal2-container{
        z-index: 9999 !important;
    }

    .Toastify__toast-container {
        z-index: 9999999 !important;
    }
`;

export default GlobalStyle;
