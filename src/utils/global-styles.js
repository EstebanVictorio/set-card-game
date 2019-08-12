import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* colors */
  --white: #fff;
  --off-white: #fafafa;
  --black: rgba(0, 0, 0, 0.87);
  --light-black: rgba(0, 0, 0, 0.5);
  --dark-gray: #4a4a4a;
  --translucent-gray: rgba(74, 74, 74, 0.5);
  --gray: rgba(0, 0, 0, 0.5);
  --light-gray: #cfcfcf;
  --dark-blue: #007bff;
  --translucent-blue: rgba(186, 231, 237, 0.5);
  --set-red: #fa0000;
  --set-purple: #a128d0;
  --set-green: #388b3b;

  /* size */
  --nav-height: 50px;
  --container-width: fit-content;
}


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: var(--dark-gray);
}

button {
  border: none;
  background-color: transparent;
}

button:focus,
a:focus {
  outline: none;
}

h1,
h2,
h3,
h4,
h5 {
  color: var(--dark-gray);
}

.primary {
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  color: var(--white);
  text-decoration: none;
  background-color: var(--dark-blue);
  border: 1px solid var(--dark-blue);
}

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}




`;

export default GlobalStyles;
