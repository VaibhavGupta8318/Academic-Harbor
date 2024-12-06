import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-3xij27mkujq57a07.us.auth0.com"
    clientId="4gci0wIEKYaMEWaPucrKrszEzoibOtnZ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Auth0Provider>
);
