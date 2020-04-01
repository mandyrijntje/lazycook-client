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
    //I need only the ingredients I choose for the recipe!
  }

  state = {
    name: "",
    imageUrl: "",
    step1: "",
    ingredients: null,
    isVegan:false,
    isVegetarian:false,
    hasNuts:false,
    hasDairy:false
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
      //how do I set the booleans?
    });
  };

  onSelect = eventId => {
    this.setState({ eventId: eventId.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props
      .createRecipe(this.state, this.state.ingredientId, this.props.history)
      //i need to pass a lot of ingredients!
      .then(() => this.props.getUser());
    this.setState({
        name: "",
        imageUrl: "",
        step1: "",
        ingredients: null,
        isVegan:false,
        isVegetarian:false,
        hasNuts:false,
        hasDairy:false
    });
  };
  render() {
    return (
      <div>
        <h2>Create a simple recipe.</h2>
        <RecipeForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          ingredients={this.props.ingredients}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredient.all
  };
}
const mapDispatchToProps = { createRecipe, getIngredients, getUser };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateRecipeFormContainer)
);
