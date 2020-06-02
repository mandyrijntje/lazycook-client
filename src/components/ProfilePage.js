import React, { Component } from "react";
import CreateRecipeFormContainer from "./CreateRecipeFormContainer";
import ProfileRecipes from "./ProfileRecipes";
import { getUser } from "../store/actions/user";
import { getRecipesForUser } from "../store/actions/recipe";
import { connect } from "react-redux";

class ProfilePage extends Component {
  // componentDidMount() {
  //   if (this.props.userLogState.jwt) {
  //     // this.props.getUser(this.props.userLogState.id);
  //     // this.props.getRecipesForUser(this.props.userLogState.id);
  //   }
  // }

  render() {
    if (!this.props.userLogState.jwt) {
      return (
        <p>You must log in to access this highly confidential material!</p>
      );
    } else if (this.props.userLogState.recipes.length === 0) {
      return (
        <div>
          <p>Welcome {this.props.userLogState.email}!</p>
          <CreateRecipeFormContainer user={this.props.userLogState} />
        </div>
      );
    } else {
      return (
        <div>
          <p>Welcome {this.props.userLogState.email}!</p>
          <CreateRecipeFormContainer user={this.props.userLogState} />
          <h1>My Recipes</h1>
          <div className=" mt-5">
            <ProfileRecipes
              user={this.props.userLogState}
              recipes={this.props.userLogState.recipes}
            />
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    // user: state.users.uniqueUser,
    // userRecipes: state.recipe.userRecipes,
    // email: state.users.uniqueUser.email,
    userLogState: state.userLogState,
  };
}
const mapDispatchToProps = { getUser, getRecipesForUser };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
