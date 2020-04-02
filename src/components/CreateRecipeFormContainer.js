import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createRecipe } from "../store/actions/recipe";
import RecipeForm from "./RecipeForm";
import { getUser } from "../store/actions/user";
import { getIngredients } from "../store/actions/ingredient";

class CreateRecipeFormContainer extends React.Component {
  async componentDidMount() {
    await this.props.getIngredients();
  }

  state = {
    name: "",
    imageUrl: "",
    step1: "",
    ingredients: [],
    isVegan: false,
    isVegetarian: false,
    hasNuts: true,
    hasDairy: false
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

  onSelect = theNewIngredientArray => {
    this.setState({
      ...this.state,
      ingredients: theNewIngredientArray
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props
      .createRecipe(this.state, this.state.ingredientId, this.props.history)
      .then(() => this.props.getUser());
    this.setState({
      name: "",
      imageUrl: "",
      step1: "",
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
