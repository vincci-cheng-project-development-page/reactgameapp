import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import FavoritesPage from "./FavoritesPage.js";
//import { FavouritesContextProvider } from './contexts/FavouritesContext'
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";

ReactDOM.render(
  <FavoritesProvider>
    <Router>
      <div>
        <Navbar />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <br />
              <h1>About</h1>
              <h2>
                {" "}
                Welcome to this quiz! This is a simple true/false trivia game
                built with React that consists of 5 questions. You can pick
                whatever combination of General Knowledge, Math, and Science
                questions you want.
              </h2>
              <div>
                {" "}
                <iframe
                  src="https://giphy.com/embed/KBFE5J0I8SLbKL7FlT"
                  width="480"
                  height="480"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/question-quiz-mark-KBFE5J0I8SLbKL7FlT">
                    via GIPHY
                  </a>
                </p>{" "}
              </div>
            </div>
          )}
        />
        <Route exact path="/playnow" component={App} />
        <Route exact path="/favorites" component={FavoritesPage} />
        {/*         <FavouritesContextProvider>
        <App />
      </FavouritesContextProvider> */}
      </div>
    </Router>
  </FavoritesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
