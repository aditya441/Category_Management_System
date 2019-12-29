import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Route path="/">
            <Header />
          </Route>
        </Router>
    </Provider>
  );
}

export default App;
