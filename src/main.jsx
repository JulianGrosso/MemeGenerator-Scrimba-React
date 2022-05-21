import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import backgroundImg from "../src/assets/background-01.jpg";

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}

html,
body {
	margin: 0;
	padding: 0;

	width: 100vw;
	overflow-x: hidden;

	font-family: "Anton", sans-serif;
	font-family: "Roboto", sans-serif;

	background-color: #01031a;
	background-image: url(${backgroundImg});
	background-position: 50% 0%;
	background-attachment: fixed;
	background-size: cover;
}

a {
	color: inherit;
	text-decoration: none;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
