import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateRecipe, deleteRecipe } from "../store/actions/recipe";
import { getIngredients } from "../store/actions/ingredient";
import RecipeForm from "./RecipeForm";
import "./EditRecipeFormContainer.css";

class EditRecipeFormContainer extends Component {
  state = { recipe: { ...this.props.recipe, ingredients: [] } };

  componentDidMount() {
    this.props.getIngredients();
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props
      .updateRecipe(this.state.recipe.id, this.state.recipe, this.props.history)
      .then(this.props.toggleForm)
      .then(this.props.history.push("/profile"));
  };

  onDelete = () => {
    this.props.deleteRecipe(this.state.recipe.id);
  };
  onChange = (event) => {
    const tempEvent = event.nativeEvent;
    const { value, name } = tempEvent.target;
    const recipe = { ...this.state.recipe, [name]: value };

    this.setState({ recipe: recipe });
  };

  onSelect = (theNewIngredientArray) => {
    const updatedIngredientsObject = {
      ...this.state.recipe,
      ingredients: theNewIngredientArray,
    };

    this.setState({ recipe: updatedIngredientsObject });
  };

  onCheck = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
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
      hasDairy: false,
    };
    this.setState({ recipe: resetRecipe });
  };

  render() {
    return (
      <div className="container">
        <div className="editBox">
          <RecipeForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            onCheck={this.onCheck}
            values={this.state.recipe}
            ingredients={this.state.recipe.ingredients}
            onSelect={this.onSelect}
            databaseIngredients={this.props.ingredients}
          />
          <button className="btn btn-danger mb-5" onClick={this.onDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredient.all,
  };
}
const mapDispatchToProps = {
  updateRecipe,
  deleteRecipe,
  getIngredients,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditRecipeFormContainer)
);
