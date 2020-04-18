import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import KitchenContainer from "./components/KitchenContainer";
import StoreContainer from "./components/StoreContainer";
import AuthPage from "./components/AuthPage";
import SignupFormContainer from "./components/SignupFormContainer";
import ProfilePage from "./components/ProfilePage";
import AllRecipes from "./components/AllRecipes";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/kitchen" component={KitchenContainer} />
      <Route exact path="/store" component={StoreContainer} />
      <Route exact path="/login" component={AuthPage} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/recipe" component={AllRecipes} />
      <Route exact path="/recipe/:id" component={RecipeCard} />
      <div className="page-footer font-small bg-info text-white pt-2 fixed-bottom">
        <div className="container-fluid text-center text-md-center">
          <div className="row">
            <div className="footer-part col-md-6 mt-md-0 mt-1 text-left">
              <span>
                0800 - 1700 CET • Weekdays (Weekends are for relaxation)
              </span>
            </div>
            <div className="footer-part col-md-6 mb-md-0 mb-0 text-right">
              <span>
                55 Straatlaan, Amsterdam • 06262-62626 • info@lazycook.com
              </span>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center pb-1">
          © 2020 copyright
          <a className="text-white" href="https://www.github.com/messmonte">
            {" "}
            www.lazycook.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
