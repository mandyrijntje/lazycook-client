import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecipe, deleteRecipe } from "../store/actions/recipe";
import RecipeForm from "./RecipeForm";

class EditRecipeFormContainer extends Component {
  state = {
    name: "",
    imageUrl: "",
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    ingredients: [], //this should have already the ingredients!
    isVegan: false, //what should the settings be?
    isVegetarian: false,
    hasNuts: false,
    hasDairy: false
  };

  onSubmit = event => {
    event.preventDefault();

    const update = {
        name: this.state.name,
        imageUrl: this.state.imageUrl,
        step1: this.state.step1,
        step2: this.state.step2,
        step3: this.state.step3,
        step4: this.state.step4,
        step5: this.state.step5,
        step6: this.state.step6,
        ingredients: [],
        isVegan: false,
        isVegetarian: false,
        hasNuts: false,
        hasDairy: false
    };

    this.props.updateRecipe(this.props.id, update);
  };

  onDelete = () => {
    this.props.deleteRecipe(this.props.id);
  };
  onChange = event => {
    const { value, name } = event.target;
    // const value = event.target.value
    // const name = event.target.name

    const update = { [name]: value };

    this.setState(update);
  };

  reset = () => {
    this.setState({
      name: "",
      description: "",
      picture: "",
      startDate: "",
      endDate: ""
    });
  };

  render() {
    return (
      <div>
        <RecipeForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        <button className="btn btn-dark" onClick={this.onDelete}>
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateRecipe,
  deleteRecipe
};
export default connect(null, mapDispatchToProps)(EditRecipeFormContainer);
