import React, { Component } from "react";
import { getRecipes } from "../store/actions/recipe";
import { getUsers } from "../store/actions/users";
import RecipeCard from "./RecipeCard";
import { connect } from "react-redux";

class AllRecipes extends Component {
  state = {
    load: true
  };
  async componentDidMount() {
    await this.props.getUsers();
    await this.props.getRecipes();
    this.setState({ load: false });
  }

  render() {
    if (this.state.load === false && this.props.recipes.recipes !== undefined) {
      const recipesCopy = [...this.props.recipes.recipes];
      const sortedRecipes = recipesCopy.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      return sortedRecipes.map(recipe => {
        const recipeAuthorId = recipe.userId;
        const recipeAuthor = this.props.users.find(
          user => user.id === recipeAuthorId
        );

        return (
          <div className="d-flex justify-content-center mb-5" key={recipe.id}>
            <RecipeCard user={recipeAuthor} recipe={recipe} id={recipe.id} />
          </div>
        );
      });
    }
    return <p>Loading...</p>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.all,
    recipes: state.recipe.all
  };
}
const mapDispatchToProps = { getRecipes, getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(AllRecipes);
