import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getRecipes } from "../store/actions/recipe";
import Kitchen from "./Kitchen";
import { getIngredients, getCategories } from "../store/actions/ingredient";

class KitchenContainer extends React.Component {
  async componentDidMount() {
    await this.props.getCategories();
    await this.props.getIngredients();
    await this.props.getRecipes();
  }

  render() {
    return (
      <div>
        <Kitchen
          onChange={this.onChange}
          values={this.state}
          onSelect={this.onSelect}
          databaseIngredients={this.props.ingredients}
          categories={this.props.categories}
          recipes={this.props.recipes} // i can remove this? since we al doing findRecipe in Kitchen
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredient.all,
    categories: state.ingredient.categories,
    recipes: state.recipe.all, // i can remove this? since we al doing findRecipe in Kitchen
  };
}
const mapDispatchToProps = {
  getIngredients,
  getCategories,
  getRecipes,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(KitchenContainer)
);
