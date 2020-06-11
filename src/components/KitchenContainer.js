import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { getRecipes } from "../store/actions/recipe";
import { getUser } from "../store/actions/user";
import Kitchen from "./Kitchen";
import { getIngredients, getCategories } from "../store/actions/ingredient";

class KitchenContainer extends React.Component {
  async componentDidMount() {
    await this.props.getCategories();
    await this.props.getIngredients();
    await this.props.getRecipes();
  }

  render() {
    if (this.props.userLogState.jwt) {
      return (
        <div className="kitchenContainer">
          <Kitchen
            onChange={this.onChange}
            values={this.state}
            onSelect={this.onSelect}
            databaseIngredients={this.props.ingredients}
            categories={this.props.categories}
            // recipes={this.props.recipes} // i can remove this? since we al doing findRecipe in Kitchen
          />
        </div>
      );
    }
    return (
      <div className="color-change-2x">
        Forbidden territory. Be a good kid and{" "}
        <Link to={`/login`}> log in </Link>or{" "}
        <Link to={`/signup`}> sign up</Link>.
        {/* <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLogState: state.userLogState,
    ingredients: state.ingredient.all,
    categories: state.ingredient.categories,
    // recipes: state.recipe.all, // i can remove this? since we al doing findRecipe in Kitchen
  };
}
const mapDispatchToProps = {
  getUser,
  getIngredients,
  getCategories,
  getRecipes,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(KitchenContainer)
);
