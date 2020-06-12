import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IngredientCard.css";

export default class IngredientCard extends Component {
  render() {
    return (
      <div className="ingredientCard" key={this.props.ingredient.id}>
        <h1 className="title">{this.props.ingredient.name}</h1>
        <img
          className="ingredient-img"
          src={this.props.ingredient.imageUrl}
          alt=""
        />
        {this.props.ingredient.isVegan ? (
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/tick.png")}
                alt="This is vegan"
              />
            </span>
            <span className="ingTxt">Vegan</span>
          </div>
        ) : (
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/cross.png")}
                alt="This is not vegan"
              />
            </span>
            <span className="ingTxt">Vegan</span>
          </div>
        )}
        {this.props.ingredient.isVegetarian ? (
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/tick.png")}
                alt="This is vegetarian"
              />
            </span>
            <span className="ingTxt">Vegetarian</span>
          </div>
        ) : (
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/cross.png")}
                alt="This is not vegetarian"
              />
            </span>
            <span className="ingTxt">Vegetarian</span>
          </div>
        )}
        {this.props.ingredient.hasNuts ? (
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/cross.png")}
                alt="This has nuts"
              />
            </span>
            <span className="ingTxt">Nut-free</span>
          </div>
        ) : (
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/tick.png")}
                alt="This has no nuts"
              />
            </span>
            <span className="ingTxt">Nut-free</span>
          </div>
        )}
        {this.props.ingredient.hasDairy ? (
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/cross.png")}
                alt="This has dairy"
              />
            </span>
            <span className="ingTxt">Dairy-free</span>
          </div>
        ) : (
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/tick.png")}
                alt="This has no dairy"
              />
            </span>
            <span className="ingTxt">Dairy-free</span>
          </div>
        )}
        {
          // this.props.ingredient.inStock ? (//temp solution
          <div>
            <span>
              <img
                className="ingBooleans"
                src={require("../assets/images/tick.png")}
                alt="This product is in stock"
              />
            </span>
            <span className="ingTxt">IN STOCK</span>
          </div>

          //) : (
          //   <div>
          //     <span>
          //       <img
          //         className="booleans"
          //         src={require("../assets/images/cross.png")}
          //         alt="This product is not in stock"
          //       />
          //     </span>
          //     <span className="ingTxt">NOT IN STOCK</span>
          //   </div>
          // )
        }
        <p>
          {" "}
          <Link className="buy" to="/checkout">
            <i>buy</i>
          </Link>
        </p>
        <div></div>
      </div>
    );
  }
}
