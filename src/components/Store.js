import React, { Component } from "react";
import IngredientCard from "./IngredientCard";
import "./Store.css";

export default class Store extends Component {
  render() {
    return (
      <div className="container">
        {this.props.databaseIngredients.map((ingredient) => {
          return (
            <div className="storeIngBox" key={ingredient.id}>
              <IngredientCard user={this.props.user} ingredient={ingredient} />
            </div>
          );
        })}
      </div>
    );
  }
}
