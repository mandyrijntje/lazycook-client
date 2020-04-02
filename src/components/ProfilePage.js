import React, { Component } from "react";
import CreateRecipeFormContainer from "./CreateRecipeFormContainer";
import ProfileRecipes from "./ProfileRecipes";
import { getUser } from "../store/actions/user";
import { getRecipesForUser } from "../store/actions/recipe";
import { connect } from "react-redux";

class ProfilePage extends Component {
  componentDidMount() {
    if (this.props.userLogState.jwt) {
      this.props.getUser(this.props.userLogState.id);
    }
  }

  render() {
    if (!this.props.userLogState.jwt) {
      return (
        <p>You must log in to access this highly confidential material!</p>
      );
    } else if (!this.props.userRecipes) {
      return <p> loading</p>;
    } else if (this.props.userRecipes.length !== 0) {
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
          <CreateRecipeFormContainer />
          <div className="row">
            {" "}
            {/* <ProfileRecipes
              user={this.props.user}
              recipes={this.props.userRecipes}
            /> */}
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.uniqueUser,
    userRecipes: state.users.uniqueUser.recipes,
    email: state.users.uniqueUser.email,
    userLogState: state.userLogState
  };
}
const mapDispatchToProps = { getUser, getRecipesForUser };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
