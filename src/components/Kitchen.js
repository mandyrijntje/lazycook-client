import React, { Component } from "react";
import "./Kitchen.css";

export default class Kitchen extends Component {
  render() {
    const categoryList = this.props.categories.map((category) => {
      return <div className="categoryListItem">{category.name}</div>;
    });
    return (
      <div>
        <ul className="categoryList">{categoryList}</ul>
        <div className="recipeBox">Recipe Box</div>
      </div>
    );
  }
}
