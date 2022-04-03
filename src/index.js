import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {LikeProvider} from './context/LikesContext';
import {WatchLaterProvider} from './context/WatchLaterContext';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <WatchLaterProvider>
    <LikeProvider>
      <Router>
        <App />
      </Router>
      </LikeProvider>
      </WatchLaterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
