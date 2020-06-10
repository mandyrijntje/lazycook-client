import React, { Component } from "react";
import { getRecipes } from "../store/actions/recipe";
import { getUsers } from "../store/actions/users";
import RecipeCard from "./RecipeCard";
import { connect } from "react-redux";
import "./AllRecipes.css";

class AllRecipes extends Component {
  state = {
    load: true,
  };
  componentDidMount() {
    this.props.getUsers();
    this.props.getRecipes();
  }

  render() {
    if (this.props.users && this.props.recipes.recipes !== undefined) {
      // console.log("usersssssss", this.props.users);
      // console.log("recips", this.props.recipes);
      const recipesCopy = [...this.props.recipes.recipes];
      const sortedRecipes = recipesCopy.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      return (
        <div className="container">
          {sortedRecipes.map((recipe) => {
            const recipeAuthorId = recipe.userId;
            let recipeAuthor = this.props.users[0];
            if (this.props.users.length !== 1) {
              recipeAuthor = this.props.users.find(
                (user) => user.id === recipeAuthorId
              );
            }

            return (
              <div className="recipe" key={recipe.id}>
                <RecipeCard
                  user={recipeAuthor}
                  recipe={recipe}
                  id={recipe.id}
                  userLogState={this.props.userLogState}
                />
              </div>
            );
          })}
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.all,
    userLogState: state.userLogState,
    recipes: state.recipe.all,
  };
}
const mapDispatchToProps = { getRecipes, getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(AllRecipes);
