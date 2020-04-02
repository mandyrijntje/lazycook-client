import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export default class RecipeCard extends Component {
  render() {
    // console.log(
    //   `CARD USER`,
    //   this.props.user,
    //   this.props
    // );
    const now = new Date();
    const updated = new Date(this.props.recipe.updatedAt);
    const hours = Math.abs(now - updated) / 36e5;

    return (
      <div className="col-lg-6 col-md-6 col-12" key={this.props.recipe.id}>
        <h1 className="text-center">
          <Link to={`/recipe/${this.props.recipe.id}`}>
            {this.props.recipe.name}
          </Link>
        </h1>
        <p className="text-center">
          {" "}
          created by LazyCook{" "}
          <Link to={`/users/${this.props.user.id}`}>
            {this.props.user.email}
          </Link>
        </p>
        <h3 className="text-center">Ingredients</h3>
        {/* how do I relate recipe to ingredients? */}
        <ul className="text-center">
          {this.props.recipe.ingredients.map(ingredient => {
            return <li key={ingredient.id}>{ingredient.name}</li>;
          })}
        </ul>
        <img className="recipe-img" src={this.props.recipe.imageUrl} alt="" />
        <h3 className="text-center">Instructions</h3>
        {this.props.recipe.step1 ? (
          <p className="text-center">1. {this.props.recipe.step1} </p>
        ) : null}
        {this.props.recipe.step2 ? (
          <p className="text-center">2. {this.props.recipe.step2} </p>
        ) : null}
        {this.props.recipe.step3 ? (
          <p className="text-center">3. {this.props.recipe.step3} </p>
        ) : null}
        {this.props.recipe.step4 ? (
          <p className="text-center">4. {this.props.recipe.step4} </p>
        ) : null}
        {this.props.recipe.step5 ? (
          <p className="text-center">5. {this.props.recipe.step5} </p>
        ) : null}
        {this.props.recipe.step6 ? (
          <p className="text-center">6. {this.props.recipe.step6} </p>
        ) : null}
        <small> Uploaded {Math.round(hours / 24)} days ago</small>
        <div></div>
      </div>
    );
  }
}
