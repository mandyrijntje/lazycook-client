import React, { Component } from "react";
import CreateRecipeFormContainer from "./CreateRecipeFormContainer";
import ProfileRecipes from "./ProfileRecipes";
import { getUser } from "../store/actions/user";
import { getRecipesForUser } from "../store/actions/recipe";
import { connect } from "react-redux";

class ProfilePage extends Component {
  componentDidMount() {
    // console.log("triggered");
    if (this.props.userLogState.jwt) {
      this.props.getUser(this.props.userLogState.id);
      this.props.getRecipesForUser(this.props.userLogState.id);
    }
  }

  render() {
    // console.log(this.props);
    if (!this.props.userLogState.jwt) {
      return (
        <p>You must log in to access this highly confidential material!</p>
      );
    } else if (this.props.userRecipes.length === 0) {
      return (
        <div>
          <p>Welcome {this.props.email}!</p>
          <p>{this.props.email}</p>
          <CreateRecipeFormContainer />
        </div>
      );
    } else {
      return (
        <div>
          <p>Welcome {this.props.email}!</p>
          <CreateRecipeFormContainer user={this.props.user} />
          <h1>My Recipes</h1>
          <div className=" mt-5">
            <ProfileRecipes
              user={this.props.user}
              recipes={this.props.userRecipes}
            />
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.uniqueUser,
    userRecipes: state.recipe.userRecipes,
    email: state.users.uniqueUser.email,
    userLogState: state.userLogState
  };
}
const mapDispatchToProps = { getUser, getRecipesForUser };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
