import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import AuthPage from "./components/AuthPage";
import SignupFormContainer from "./components/SignupFormContainer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/login" component={AuthPage} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </div>
  );
}

export default App;
