import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import "./ProfileRecipes.css";

class ProfileRecipes extends Component {
  render() {
    return this.props.recipes.map((recipe) => {
      return (
        <div
          className="recipeBox d-flex justify-content-center mb-5"
          key={recipe.id}
        >
          <RecipeCard user={this.props.user} recipe={recipe} />
        </div>
      );
    });
  }
}

export default ProfileRecipes;
