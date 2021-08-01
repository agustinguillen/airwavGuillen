import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CartState from "./context/cart/CartState";

ReactDOM.render(
  <CartState>
    <App />
  </CartState>,
  document.getElementById("root")
);

reportWebVitals();
