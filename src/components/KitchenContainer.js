import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { findRecipe } from "../store/actions/recipe";
import Kitchen from "./Kitchen";
import { getUser } from "../store/actions/user";
import { getIngredients } from "../store/actions/ingredient";
import { getCategories } from "../store/actions/ingredient";
import { getRecipes } from "../store/actions/recipe";

class KitchenContainer extends React.Component {
  async componentDidMount() {
    await this.props.getCategories();
    await this.props.getIngredients();
    await this.props.getRecipes();
  }

  state = {
    ingredients: [],
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onCheck = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
    });
  };

  onIngredientSelect = (newIngredient) => {
    this.setState({
      ...this.state,
      ingredients: this.state.ingredients.push(newIngredient),
    }).then(this.props.getRecipeForIngredients(this.state.ingredients));
    //write action in ingredient & we also need backend!
  };

  onCategorySelect = (categoryId) => {
    this.props.getIngredientsForCategory(categoryId);
    //write action in ingredient
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props
      .findRecipe(this.state, this.state.ingredients, this.props.history)
      .then(() => this.props.getUser());
    this.setState({
      ingredients: [],
    });
  };
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
  // console.log("what is my state", state);
  return {
    ingredients: state.ingredient.all,
    categories: state.ingredient.categories,
    foundRecipe: state.recipe.foundRecipe,
  };
}
const mapDispatchToProps = { findRecipe, getIngredients, getCategories, getRecipes, getUser };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(KitchenContainer)
);
