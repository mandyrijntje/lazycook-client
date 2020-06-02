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
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    ingredients: [],
    isVegan: false,
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false,
  };

  onChange = (event) => {
    const tempEvent = event.nativeEvent;
    this.setState({
      [tempEvent.target.name]: tempEvent.target.value,
    });
  };
  onCheck = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
    });
  };

  onSelect = (theNewIngredientArray) => {
    this.setState({
      ...this.state,
      ingredients: theNewIngredientArray,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props
      .createRecipe(this.state, this.state.ingredients, this.props.history)
      // .then(() => this.props.getUser(this.props.user.id));
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
      hasDairy: false,
    });
  };
  render() {
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
  return {
    ingredients: state.ingredient.all,
  };
}
const mapDispatchToProps = { createRecipe, getIngredients, getUser };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateRecipeFormContainer)
);
