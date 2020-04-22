import React, { Component } from "react";
import EditRecipeFormContainer from "./EditRecipeFormContainer";
import RecipeCard from "./RecipeCard";

class ProfileRecipes extends Component {
  state = {
    recipesInEdit: [],
    showForm:false
  };

  toggleForm = (recipe) => {
    // console.log(recipe);
    // const newState = this.state.recipesInEdit.includes(recipe.id)
    //   ? this.state.recipesInEdit.filter(id => id !== recipe.id)
    //   : this.state.recipesInEdit.concat(recipe.id);
    // console.log(recipe);
    this.setState({ showForm: true });
    
  };

  render() {
    return this.props.recipes.map(recipe => {
      // const showForm = this.state.recipesInEdit.includes(recipe.id);

      return (
        <div className="d-flex justify-content-center mb-5" key={recipe.id}>
          <RecipeCard user={this.props.user} recipe={recipe} />
          <div>
            <button
              className="btn btn-dark"
              onClick={() => this.toggleForm(recipe)}
            >
              Edit mode
            </button>

            {this.state.showForm && <EditRecipeFormContainer recipe={recipe} />}
          </div>
        </div>
      );
    });
  }
}

export default ProfileRecipes;
