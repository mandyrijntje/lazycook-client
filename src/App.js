import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import AuthPage from "./components/AuthPage";
import SignupFormContainer from "./components/SignupFormContainer";

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={AuthPage} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </div>
  );
}

export default App;
