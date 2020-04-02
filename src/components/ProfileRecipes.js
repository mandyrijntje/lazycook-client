import React, { Component } from "react";
import EditRecipeFormContainer from "./EditRecipeFormContainer";
import RecipeCard from "./RecipeCard";

class ProfileRecipes extends Component {
  state = {
    recipesInEdit: []
  };

  toggleForm = recipe => {
    const newState = this.state.recipesInEdit.includes(recipe.id)
      ? this.state.recipesInEdit.filter(id => id !== recipe.id)
      : this.state.recipesInEdit.concat(recipe.id);

    this.setState({ recipesInEdit: newState });
  };

  render() {
    return this.props.recipes.map(recipe => {
      const showForm = this.state.recipesInEdit.includes(recipe.id);

      return (
        <div key={recipe.id}>
          <RecipeCard user={this.props.user} recipe={recipe} />
          <div>
            <button
              className="btn btn-dark"
              onClick={() => this.toggleForm(recipe)}
            >
              Edit mode
            </button>

            {showForm && <EditRecipeFormContainer id={recipe.id} />}
          </div>
        </div>
      );
    });
  }
}

export default ProfileRecipes;
