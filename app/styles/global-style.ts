import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  :root {
    font-family: 'SUIT-Regular', sans-serif;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  li{
    list-style:none;
  }
  button {
    font-family: 'SUIT-Regular', sans-serif;
    cursor: pointer;
    padding: 0;
    border: 0;
    background-color: transparent;
    color: inherit;
  }

  img {
    vertical-align: top;
  }

  a {
    color: black;
    text-decoration: none;
  }

  input {
    border: 0;
    font-family: 'SUIT-Regular';
    resize: none;
    -webkit-appearance: none;
	  -webkit-border-radius: 0;
    &:focus {
      outline: none;
    }
  }
  body{
    max-width: 95rem;
    width: 85%;
    margin: 0 auto;
  }
  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  .my-icon{
    margin: 20px auto 0;
    border: 4px solid;
  }
`;
