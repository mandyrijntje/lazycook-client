import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AuthPage from "./components/AuthPage";
import SignupFormContainer from "./components/SignupFormContainer";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={AuthPage} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/profile" component={ProfilePage} />
    </div>
  );
}

export default App;
