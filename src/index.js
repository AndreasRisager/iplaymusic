import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// import * as Sentry from "@sentry/react";

// Sentry.init({
// 	dsn: "https://f9107c9aa27c42a0b5e13298c16fd7b0@o539712.ingest.sentry.io/5657485",
//  });

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
