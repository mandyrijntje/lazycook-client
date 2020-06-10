import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditRecipeFormContainer from "./EditRecipeFormContainer";
import "./RecipeCard.css";

export default class RecipeCard extends Component {
  state = {
    showForm: false,
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  render() {
    console.log(this.props.user);
    const now = new Date();
    const updated = new Date(this.props.recipe.updatedAt);
    const hours = Math.abs(now - updated) / 36e5;

    return (
      <div className="recipeCard" key={this.props.recipe.id}>
        <div>
          {this.props.user.id === this.props.userLogState.id ? (
            <button className="btn btn-dark" onClick={() => this.toggleForm()}>
              Edit
            </button>
          ) : null}

          {this.state.showForm && (
            <EditRecipeFormContainer
              recipe={this.props.recipe}
              toggleForm={this.toggleForm}
            />
          )}
        </div>
        <h1 className="title">
          {/* <Link to={`/recipe/${this.props.recipe.id}`}> */}
          {this.props.recipe.name}
          {/* </Link> */}
        </h1>
        <p className="subtitle">
          {" "}
          created by LazyCook{" "}
          <Link to={`/users/${this.props.user.id}`}>
            {this.props.user.email}
          </Link>
        </p>
        <div className="recipeIngs">
          <span className="ingTitle">Ingredients</span>
          <div className="ingList">
            {this.props.recipe.ingredients.map((ingredient, index) => {
              return (
                <span key={ingredient.id}>
                  {index + 1}. {ingredient.name}　{"     "}
                </span>
              );
            })}
          </div>
        </div>
        <img className="recipe-img" src={this.props.recipe.imageUrl} alt="" />
        <div className="ingTitle">Instructions</div>
        {this.props.recipe.step1 ? (
          <p className="txt">1. {this.props.recipe.step1} </p>
        ) : null}
        {this.props.recipe.step2 ? (
          <p className="txt">2. {this.props.recipe.step2} </p>
        ) : null}
        {this.props.recipe.step3 ? (
          <p className="txt">3. {this.props.recipe.step3} </p>
        ) : null}
        {this.props.recipe.step4 ? (
          <p className="txt">4. {this.props.recipe.step4} </p>
        ) : null}
        {this.props.recipe.step5 ? (
          <p className="txt">5. {this.props.recipe.step5} </p>
        ) : null}
        {this.props.recipe.step6 ? (
          <p className="txt">6. {this.props.recipe.step6} </p>
        ) : null}
        <small> Uploaded {Math.round(hours / 24)} days ago</small>
        <div></div>
      </div>
    );
  }
}
