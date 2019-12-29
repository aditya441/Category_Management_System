import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
          <Route path="/">
            <Header />
          </Route>
    </Router>
  );
}

export default App;
