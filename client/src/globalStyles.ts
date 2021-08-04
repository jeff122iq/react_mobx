import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    color: #ffffff;
    background-image: linear-gradient(0deg, rgba(6,0,51,0.8295693277310925) 0%, rgba(91,0,129,0.4598214285714286) 100%), url("https://media.contentapi.ea.com/content/dam/bf/images/2017/08/BF1-Better-Time.jpg.adapt.crop16x9.575p.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6, p, li, a, ul {
    margin: 0;
    padding: 0;
    font-weight: 300;
    text-decoration: none;
    color: #ffffff;
  }
`;

export default GlobalStyle;