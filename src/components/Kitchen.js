import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Multiselect } from "multiselect-react-dropdown";
import "./Kitchen.css";
import { findRecipe, getTipRecipe, resetRecipe } from "../store/actions/recipe";
import { getUser } from "../store/actions/user";
import {
  getIngredientsForCategory,
  getIngredients,
} from "../store/actions/ingredient";

class Kitchen extends Component {
  multiselectRef = [];
  state = {
    toggled: false,
    ingredientsList: [],
    allIngredients: [],
    tipIngredient: "",
  };
  componentDidMount = async () => {
    await document.body.addEventListener("click", (event) =>
      this.handleUnClick(event)
    );
    await this.props.getIngredients();
    await this.props.categories.forEach(() =>
      this.multiselectRef.push(React.createRef())
    );
  };

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
      this.findMyRecipe
    );
  };

  findMyRecipe = async () => {
    await this.props.findRecipe(this.state.ingredientsList, this.props.history);
    let temp = this.props.allIngredients;
    for (let i = 0; i < temp.length; i++) {
      if (
        this.state.ingredientsList.find((ing) => ing.name === temp[i].name) ===
        undefined
      ) {
        if (this.state.ingredientsList.length !== 0) {
          await this.props.getTipRecipe(
            [...this.state.ingredientsList, temp[i]],
            this.props.history
          );
        }
        if (!this.props.tipRecipe.hasOwnProperty("dataValues")) {
          this.setState({ ...this.state, tipIngredient: temp[i] });
          return;
        }
      }
    }
  };

  onCategorySelect = (categoryId) => {
    this.props.getIngredientsForCategory(categoryId);
  };

  handleClick = (event) => {
    event.target.parentElement.childNodes[0].classList.toggle("changeIndex-2");
    event.target.parentElement
      .querySelector(".categoryListItem")
      .classList.toggle("changeIndex-1");
    event.target.parentElement.querySelector(".searchBox").focus();
    event.target.parentElement.classList.toggle("changeIndex-3");
    this.setState({ toggled: true });
  };

  handleUnClick = (event) => {
    if (this.state.toggled === true) {
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

  onRemove = async (ingToBeDeleted) => {
    console.log(ingToBeDeleted);
    if (this.multiselectRef[ingToBeDeleted.catIndex]) {
      console.log(
        this.multiselectRef,
        ingToBeDeleted.catIndex,
        this.multiselectRef[ingToBeDeleted.catIndex].current
      );
      this.multiselectRef[
        ingToBeDeleted.catIndex
      ].current.resetSelectedValues();
    }
    // let arr = [];
    const filteredArr = this.state.ingredientsList.filter(
      (item) => item.id !== ingToBeDeleted.id
    );
    if (filteredArr.length === 0) {
      this.props.resetRecipe();
    }
    this.setState(
      {
        ingredientsList: filteredArr,
      },
      this.findMyRecipe
    );
  };
  getIng = (id, index) => {
    let arr = [];
    if (this.props.databaseIngredients.length > 0) {
      this.props.databaseIngredients.forEach((item) => {
        if (item.categoryId === id) {
          arr.push({
            id: item.id,
            name: item.name,
            catIndex: index,
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
    return arr;
  };
  render() {
    const categoryList = this.props.categories.map((category, index) => {
      return (
        <div className="containerMultiselect" key={category.id}>
          <Multiselect
            placeholder="Select an ingredient"
            resetSelectedValues="false"
            displayValue="name"
            onSelect={this.onIngredientSelect} // Function will trigger on select event
            options={this.getIng(category.id, index)}
            ref={this.multiselectRef[index]}
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

    return (
      <div>
        <ul className="categoryList">{categoryList}</ul>
        <div className="recipeContainer">
          <div className="ingredientBox">
            {this.state.ingredientsList.map((ing, index) => {
              return (
                <span className="bigbox" key={index}>
                  <span className="ingbox" key={index}>
                    {ing.name}
                  </span>
                  <span
                    className="close"
                    onClick={() => this.onRemove(ing)} // Function will trigger on remove event
                  ></span>
                </span>
              );
            })}
          </div>
          <div className="recipeBox">
            <div className="recipeName">{this.props.foundRecipe.name}</div>
            <img
              className="recipeImage"
              src={this.props.foundRecipe.imageUrl}
              alt=""
            />
          </div>
          {this.props.tipRecipe.length === 0 ? null : !this.props.tipRecipe ? (
            <div className="tipBox">
              Alas, no recipes for that combo yet. Need some magic? Create your
              custom recipe <Link to={`/profile`}> here</Link>or shop for fresh
              ingredients at the <Link to={`/store`}> store</Link>.
            </div>
          ) : (
            <div className="tipBox">
              Psst, add: {this.state.tipIngredient.name} to make{" "}
              {this.props.tipRecipe.name}. Don't have it at home? Shop for{" "}
              {this.state.tipIngredient.name} at the{" "}
              <Link to={`/store`}> store</Link>.
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allIngredients: state.ingredient.all,
    tipRecipe: state.recipe.tipRecipe,
    foundRecipe: state.recipe.foundRecipe,
    categoryIngredients: state.ingredient.categoryIngredients,
  };
}
const mapDispatchToProps = {
  findRecipe,
  getTipRecipe,
  getIngredientsForCategory,
  getUser,
  getIngredients,
  resetRecipe,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Kitchen)
);
