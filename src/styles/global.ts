import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-50: #f1f1f1;
    --gray-100: #f2f2f2;
    --gray-200: #d4d2d2;
    --gray-400: #8f8f8f;
    --gray-600: #636363;
    --gray-800: #313131;
    --gray-850: #212121;

    --orange-400: #ed846d;
    --orange-700: #e74a27;

    --white: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    filter: brightness(0.8);
  }

  .background-color-bug {
    background: #729f3f;
    color: #fff;
  }

  .background-color-dragon {
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff;
  }

  .background-color-fairy {
    background: #fdb9e9;
    color: var(--gray-850);
  }

  .background-color-fire {
    background: #fd7d24;
    color: #fff;
  }

  .background-color-ghost {
    background: #7b62a3;
    color: #fff;
  }

  .background-color-ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: var(--gray-850);
  }

  .background-color-normal {
    background: #a4acaf;
    color: var(--gray-850);
  }

  .background-color-psychic {
    background: #f366b9;
    color: #fff;
  }

  .background-color-steel {
    background: #9eb7b8;
    color: var(--gray-850);
  }

  .background-color-dark {
    background: #707070;
    color: #fff;
  }

  .background-color-electric {
    background: #eed535;
    color: var(--gray-850);
  }

  .background-color-fighting {
    background: #d56723;
    color: #fff;
  }

  .background-color-flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: var(--gray-850);
  }

  .background-color-grass {
    background: #9bcc50;
    color: var(--gray-850);
  }

  .background-color-ice {
    background: #51c4e7;
    color: var(--gray-850);
  }

  .background-color-poison {
    background: #b97fc9;
    color: #fff;
  }

  .background-color-rock {
    background: #a38c21;
    color: #fff;
  }

  .background-color-water {
    background: #4592c4;
    color: #fff;
  }
`;