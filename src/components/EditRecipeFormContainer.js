import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateRecipe, deleteRecipe } from "../store/actions/recipe";
import { getIngredients } from "../store/actions/ingredient";
import { getUser } from "../store/actions/user";
import RecipeForm from "./RecipeForm";

class EditRecipeFormContainer extends Component {
  state = { recipe: { ...this.props.recipe, ingredients: [] } };

  componentDidMount() {
    this.props.getIngredients();
  }

  onSubmit = event => {
    event.preventDefault();

    console.log("look at me", this.state.recipe);
    this.props
      .updateRecipe(this.state.recipe.id, this.state.recipe, this.props.history)
      .then(this.props.history.push("/profile"));
  };

  onDelete = () => {
    this.props.deleteRecipe(this.state.recipe.id);
  };
  onChange = event => {
    const tempEvent = event.nativeEvent;

    console.log(event.nativeEvent);
    const { value, name } = tempEvent.target;
    // const value = event.target.value
    // const name = event.target.name

    const recipe = { ...this.state.recipe, [name]: value };

    this.setState({ recipe: recipe });
    console.log(this.state.recipe);
  };

  onSelect = theNewIngredientArray => {
    console.log(theNewIngredientArray);
    const updatedIngredientsObject = {
      ...this.state.recipe,
      ingredients: theNewIngredientArray
    };

    this.setState({ recipe: updatedIngredientsObject });
    console.log(this.state.recipe);
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

  reset = () => {
    const resetRecipe = {
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
    };
    this.setState({ recipe: resetRecipe });
  };

  render() {
    console.log("why", this.state.recipe);
    return (
      <div>
        <RecipeForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          onCheck={this.onCheck}
          values={this.state.recipe}
          ingredients={this.state.recipe.ingredients}
          onSelect={this.onSelect}
          databaseIngredients={this.props.ingredients}
        />
        <button className="btn btn-dark" onClick={this.onDelete}>
          Delete
        </button>
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
const mapDispatchToProps = {
  updateRecipe,
  deleteRecipe,
  getIngredients,
  getUser
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditRecipeFormContainer)
);
