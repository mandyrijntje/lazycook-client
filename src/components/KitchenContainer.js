import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createRecipe } from "../store/actions/recipe";
import RecipeForm from "./RecipeForm";
import { getUser } from "../store/actions/user";
import { getIngredients } from "../store/actions/ingredient";

class CreateRecipeFormContainer extends React.Component {
  async componentDidMount() {
    await this.props.getCategories();
    await this.props.getIngredients();
    await this.props.getRecipes();
  }

  state = {
    ingredients: []
  };

  onChange = event => {
    // console.log(
    //   "do i get called?",
    //   event.target,
    //   event.target.value,
    //   event.target.name
    // );

    this.setState({
      [event.target.name]: event.target.value
      //how do I set the booleans?
    });
  };
  onCheck = event => {
    // console.log(
    //   "do i get called?",
    //   event.target,
    //   event.target.checked,
    //   event.target.name
    // );

    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  onIngredientSelect = newIngredient => {
    this.setState({
      ...this.state,
      ingredients: this.state.ingredients.push(newIngredient)
    }).then(this.props.getRecipeForIngredients(this.state.ingredients));
    //write action in ingredient & we also need backend!
  };

  onCategorySelect = categoryId => {
    this.props.getIngredientsForCategory(categoryId);
    //write action in ingredient
  };

  onSubmit = event => {
    event.preventDefault();
    this.props
      .createRecipe(this.state, this.state.ingredients, this.props.history)
      .then(() => this.props.getUser());
    this.setState({
      name: "",
      imageUrl: "",
      step1: "",
      step2: "",
      step3: "",
      step4: "",
      step5: "",
      step6: "",
      ingredients: [],
      isVegan: false,
      isVegetarian: false,
      hasNuts: false,
      hasDairy: false
    });
  };
  render() {
    // console.log("render of CRFC ", this.state);

    return (
      <div>
        <h2>Create a simple recipe.</h2>
        <RecipeForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          onCheck={this.onCheck}
          values={this.state}
          ingredients={this.state.ingredients}
          onSelect={this.onSelect}
          databaseIngredients={this.props.ingredients}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("what is my state", state);
  return {
    ingredients: state.ingredient.all
  };
}
const mapDispatchToProps = { createRecipe, getIngredients, getUser };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateRecipeFormContainer)
);
