import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Multiselect } from "multiselect-react-dropdown";
import "./Kitchen.css";
import { findRecipe } from "../store/actions/recipe";
import { getUser } from "../store/actions/user";
import { getIngredientsForCategory } from "../store/actions/ingredient";

class Kitchen extends Component {
  multiselectRef = React.createRef();
  state = {
    toggled: false,
    ingredientsList: [],
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
    const tempArr = [
      ...this.state.ingredientsList,
      newIngredient[newIngredient.length - 1],
    ];

    this.setState(
      {
        ingredientsList: tempArr,
      },
      () =>
        this.props.findRecipe(this.state.ingredientsList, this.props.history)
      // .then(() => this.props.getUser())
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

  onRemove(ingToBeRemoved) {}

  getIng = (id) => {
    // console.log(id);
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
    // console.log(arr);
    return arr;
  };
  render() {
    console.log(this.props.foundRecipe);
    const categoryList = this.props.categories.map((category, index) => {
      return (
        <div className="containerMultiselect" key={category.id}>
          <Multiselect
            placeholder="Select an ingredient"
            resetSelectedValues="false"
            displayValue="name"
            onSelect={this.onIngredientSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            options={this.getIng(category.id)}
            ref={this.multiselectRef}
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
          <div className="ingredientBox">
            {this.state.ingredientsList.map((ing, index) => {
              return (
                <span className="ingbox" key={index}>
                  {ing.name}
                  <span
                    className="close"
                    onClick={() => this.onRemove(ing.name)}
                  ></span>
                </span>
              );
            })}
          </div>
          <div className="recipeBox">{this.props.foundRecipe.step1}</div>
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
