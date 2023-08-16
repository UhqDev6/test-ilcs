import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage/Homepage";
import { Provider } from "react-redux";
import store from "./states";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Homepage />
    </React.StrictMode>
  </Provider>
);
