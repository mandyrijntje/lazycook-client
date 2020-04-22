import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./Kitchen.css";

export default class Kitchen extends Component {
  state = {
    toggled: false,
  };
  componentDidMount = () => {
    document.body.addEventListener("click", (event) =>
      this.handleUnClick(event)
    );
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
      console.log(event.target);
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

  render() {
    const options = this.props.databaseIngredients.map((ingredient) => {
      return {
        id: ingredient.id,
        value: ingredient.id,
        label: ingredient.name,
      };
    });

    const name = this.props.databaseIngredients.map(
      (ingredient) => ingredient.id
    );
    //
    const categoryList = this.props.categories.map((category) => {
      return (
        <div className="containerMultiselect">
          <Multiselect
            placeholder="Select an ingredient"
            name={name}
            options={options}
            value={this.props.ingredients}
            onChange={this.props.onIngredientSelect}
            labelledBy={"Select"}
            isMulti={true}
            isClearable={true}
            loseMenuOnSelect={false}
            hideSelectedOptions={false}
            isSearchable={true}
            backspaceRemovesValue={true}
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
    console.log(options);
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
