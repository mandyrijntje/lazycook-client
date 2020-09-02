import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import CheckoutContainer from "./components/CheckoutContainer";
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
      <Route exact path="/checkout" component={CheckoutContainer} />
      <Route exact path="/store" component={StoreContainer} />
      <Route exact path="/login" component={AuthPage} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/recipe" component={AllRecipes} />
      <Route exact path="/recipe/:id" component={RecipeCard} />
      <div className="page-footer d-flex flex-row w-100 font-small bg-info text-white pt-2 mb-0 position-fixed pb-1">
        <div className="container-fluid text-center text-md-center">
          <div className="row">
            <div className="footer-part col-md-3 mt-md-0 mt-1 text-left">
              <span>0800 - 1700 CET • Weekdays</span>
            </div>
            <div className="footer-part col-md-6 mb-md-0 mb-0 text-center">
              <span>55 Straatlaan, AMS • 06262-62626 • info@lazycook.com</span>
            </div>
            <div className="footer-part col-md-3 mb-md-0 mb-0 text-right">
              © 2020
              <a className="text-white" href="https://www.github.com/messmonte">
                {" "}
                lazycook.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
