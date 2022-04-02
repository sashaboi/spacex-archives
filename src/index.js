import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {LikeProvider} from './context/LikesContext';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <LikeProvider>
      <Router>
        <App />
      </Router>
      </LikeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
