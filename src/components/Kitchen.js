import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Multiselect } from "multiselect-react-dropdown";
import "./Kitchen.css";
import { findRecipe } from "../store/actions/recipe";
import { getUser } from "../store/actions/user";
import { getIngredientsForCategory } from "../store/actions/ingredient";

class Kitchen extends Component {
  state = {
    toggled: false,
    ingredients: [],
  };
  componentDidMount() {
    document.body.addEventListener("click", (event) =>
      this.handleUnClick(event)
    );
    // console.log("hi", this.props.databaseIngredients);
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onIngredientSelect = (newIngredient) => {
    // console.log(newIngredient);
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
  }; //what happens here?

  handleClick = (event) => {
    event.target.parentElement.childNodes[0].classList.toggle("changeIndex-2");
    event.target.parentElement
      .querySelector(".categoryListItem")
      .classList.toggle("changeIndex-1");
    event.target.parentElement.querySelector(".searchBox").focus();
    event.target.parentElement.classList.toggle("changeIndex-3");
    // this.props.getIngredientsForCategory(id);
    this.setState({ toggled: true });
  };

  handleUnClick = (event) => {
    if (this.state.toggled === true) {
      // console.log(event.target);
      document
        .querySelector(".changeIndex-3")
        .childNodes[0].classList.toggle("changeIndex-2"); //chilled nodes = all children of this element
      document
        .querySelector(".changeIndex-3")
        .childNodes[1].classList.toggle("changeIndex-1");
      document
        .querySelector(".changeIndex-3")
        .classList.toggle("changeIndex-3");
      this.setState({ toggled: false });
    }
  };
  onSelect(selectedList, selectedItem) {}

  onRemove(selectedList, removedItem) {}
  getIng = (id) => {
    console.log(id);
    let arr = [];
    if (this.props.databaseIngredients.length > 0) {
      this.props.databaseIngredients.forEach((item) => {
        if (item.categoryId === id) {
          arr.push({
            id: item.id,
            name: item.name,
          });
        }
      });
    } else {
      arr = [
        {
          id: 0,
          name: "unnamed",
        },
      ];
    }
    console.log(arr);
    return arr;
  };
  render() {
    const categoryList = this.props.categories.map((category, index) => {
      return (
        <div className="containerMultiselect" key={category.id}>
          <Multiselect
            placeholder="Select an ingredient"
            displayValue="name"
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            options={this.getIng(category.id)}
          />
          <div
            key={category.id}
            className="categoryListItem"
            onClick={(event) => this.handleClick(event)}
          >
            {category.name}
          </div>
        </div>
      );
    });
    //
    // console.log("category ing options in kitchen", options);
    return (
      <div>
        <ul className="categoryList">{categoryList}</ul>
        <div className="recipeContainer">
          <div className="ingredientBox"></div>
          <div className="recipeBox">blabla</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foundRecipe: state.recipe.foundRecipe,
    categoryIngredients: state.ingredient.categoryIngredients,
  };
}
const mapDispatchToProps = {
  findRecipe,
  getIngredientsForCategory,
  getUser,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Kitchen)
);
