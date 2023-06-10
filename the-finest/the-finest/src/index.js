import React from "react"
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux"
import "./index.css"
import App from "./App"
import store from "./Store"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import "mdb-react-ui-kit/dist/css/mdb.min.css"

createRoot(
	<React.StrictMode>
		<Provider store={store}>
		 <App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)