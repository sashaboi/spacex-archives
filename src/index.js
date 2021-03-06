import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {LikeProvider} from './context/LikesContext';
import {WatchLaterProvider} from './context/WatchLaterContext';
import {PlaylistProvider} from './context/PlaylistContext'
import {AlertProvider} from './context/Alertcontext'
import {HistoryProvider} from './context/Historycontext'
import {CategoryProvider} from './context/CategoryContext'
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AlertProvider>
    <PlaylistProvider>
      <WatchLaterProvider>
        <LikeProvider>
        <HistoryProvider>
        <CategoryProvider>
          <App />
          </CategoryProvider>
          </HistoryProvider>
        </LikeProvider>
    </WatchLaterProvider>
    </PlaylistProvider>
    </AlertProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
