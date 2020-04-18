import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//
import { findRecipe, getRecipes } from "../store/actions/recipe";
import Kitchen from "./Kitchen";
import { getUser } from "../store/actions/user";
import {
  getIngredients,
  getIngredientsForCategory,
  getCategories,
} from "../store/actions/ingredient";

class KitchenContainer extends React.Component {
  async componentDidMount() {
    await this.props.getCategories();
    await this.props.getIngredients();
    await this.props.getRecipes();
  }

  state = {
    ingredients: [],
  };

  // multiValueContainer = ({ selectProps, data }) => {
  //   const label = data.label;
  //   const allSelected = selectProps.value;
  //   const index = allSelected.findIndex(selected => selected.label === label);
  //   const isLastSelected = index === allSelected.length - 1;
  //   const labelSuffix = isLastSelected ? ` (${allSelected.length})` : ", ";
  //   const val = `${label}${labelSuffix}`;
  //   return val;
  // };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onIngredientSelect = (newIngredient) => {
    console.log(newIngredient);
    this.setState({
      ...this.state,
      ingredients: this.state.ingredients.push(newIngredient),
    }).then(
      this.props
        .findRecipe(this.state.ingredients, this.props.history)
        .then(() => this.props.getUser())
    );
  };

  onCategorySelect = (categoryId) => {
    this.props.getIngredientsForCategory(categoryId);
  };

  onCategorySearch = (event) => {
    event.preventDefault();
  };
  //
  render() {
    return (
      <div>
        <Kitchen
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          onCheck={this.onCheck}
          values={this.state}
          ingredients={this.state.ingredients}
          onSelect={this.onSelect}
          databaseIngredients={this.props.ingredients}
          categories={this.props.categories}
          foundRecipe={this.props.foundRecipe}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredient.all,
    categories: state.ingredient.categories,
    foundRecipe: state.recipe.foundRecipe,
    categoryIngredients: state.ingredient.categoryIngredients,
  };
}
const mapDispatchToProps = {
  findRecipe,
  getIngredients,
  getCategories,
  getIngredientsForCategory,
  getRecipes,
  getUser,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(KitchenContainer)
);
