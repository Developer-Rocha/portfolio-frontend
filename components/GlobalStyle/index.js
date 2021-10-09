import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ff6a00;
  }
  * {
    font-family: "Open Sans", sans-serif;
  }

  body {
    font-family: "Open Sans", sans-serif;
    color: #272829;
  }

  a {
  color: #0563bb;
  text-decoration: none;
  }

  a:hover {
    color: #067ded;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5{
    font-family: "Raleway", sans-serif;
  }

  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  /*--------------------------------------------------------------
  # Back to top button
  --------------------------------------------------------------*/
  .back-to-top {
    position: fixed;
    visibility: hidden;
    opacity: 0;
    right: 15px;
    bottom: 15px;
    z-index: 996;
    background: #0563bb;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    transition: all 0.4s;
  }
  .back-to-top i {
    font-size: 28px;
    color: #fff;
    line-height: 0;
  }
  .back-to-top:hover {
    background: #0678e3;
    color: #fff;
  }
  .back-to-top.active {
    visibility: visible;
    opacity: 1;
  }

  /*--------------------------------------------------------------
  # Preloader
  --------------------------------------------------------------*/
  #preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow: hidden;
    background: #fff;
  }

  #preloader:before {
    content: "";
    position: fixed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    border: 6px solid #0563bb;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    -webkit-animation: animate-preloader 1s linear infinite;
    animation: animate-preloader 1s linear infinite;
  }

  @-webkit-keyframes animate-preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /*--------------------------------------------------------------
  # Disable aos animation delay on mobile devices
  --------------------------------------------------------------*/
  @media screen and (max-width: 768px) {
    [data-aos-delay] {
      transition-delay: 0 !important;
    }
  }

`;

export default GlobalStyle;
