import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary:  #519085;
    --secondary: #0678e3;
  }
  * {
    font-family: "Open Sans", sans-serif;
  }

  body {
    font-family: "Open Sans", sans-serif;
    color: #272829;
  }

  a {
  color: var(--primary);
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
  # Buttons
  --------------------------------------------------------------*/
  .btn--default {
    border-radius: 4px 0 4px;
    background-color: var(--primary);
    color: #FFF;
    transition: 0.4s;

    &:hover {
      color: #FFF;
      background: var(--secondary);
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
    background: var(--primary);
    width: 40px;
    height: 40px;
    border-radius: 50px;
    transition: all 0.4s;
    i {
      font-size: 28px;
      color: #fff;
      line-height: 0;
    }
    &:hover {
      background: var(--secondary);;
      color: #fff;
    }

    &.active{
      visibility: visible;
      opacity: 1;
    }
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

    &:before{
      content: "";
      position: fixed;
      top: calc(50% - 30px);
      left: calc(50% - 30px);
      border: 6px solid var(--primary);
      border-top-color: #fff;
      border-bottom-color: #fff;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      -webkit-animation: animate-preloader 1s linear infinite;
      animation: animate-preloader 1s linear infinite;
    }
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


  /**
  * Mobile Navigation
  */

   .mobile-nav-active {
	overflow: hidden;
	#header {
		left: 0;
	}
	.mobile-nav-toggle {
		color: #fff;
		background-color: var(--primary);
	}
}


/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
	padding: 60px 0;
	overflow: hidden;
}
.section-title {
	text-align: center;
	padding-bottom: 30px;
	h2 {
		font-size: 32px;
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 20px;
		padding-bottom: 20px;
		position: relative;
		color: #45505b;
		&::before {
			content: "";
			position: absolute;
			display: block;
			width: 120px;
			height: 1px;
			background: #ddd;
			bottom: 1px;
			left: calc(50% - 60px);
		}
		&::after {
			content: "";
			position: absolute;
			display: block;
			width: 40px;
			height: 3px;
			background: var(--primary);
			bottom: 0;
			left: calc(50% - 20px);
		}
	}
	p {
		margin-bottom: 0;
    font-size: 20px;
	}
}



/*--------------------------------------------------------------
# Modal
--------------------------------------------------------------*/
.Modal {
  position: absolute;
  top: 40px;
  left: 100px;
  right: 100px;
  bottom: 40px;
  background-color: #fff;
  padding: 25px;
  overflow: auto;

  @media (max-width: 992px) {
    top: 60px;
    left: 10px;
    right: 10px;
  }
}

.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.ReactModal__Body--open {
  overflow: hidden;
}

.ReactModal__Overlay {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 500ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
  transform: translateX(0px);
}

.ReactModal__Overlay--before-close {
  opacity: 0;
  transform: translateX(-100px);
}

.close-modal-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  width: 32px;
  height: 32px;
  font-size: 0;

  &::after,
  &::before{
    position: absolute;
    left: 15px;
    content: ' ';
    height: 23px;
    width: 2px;
    background-color: #333;
    top: 0;
  }

  &::before{
    transform: rotate(45deg);
  }

  &::after{
    transform: rotate(-45deg);
  }

  &:hover{
    opacity: 0.5;
  }
}


`;

export default GlobalStyle;
