import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getIngredients, getCategories } from "../store/actions/ingredient";
import Store from "./Store";

class StoreContainer extends Component {
  componentDidMount = async () => {
    await this.props.getCategories();
    await this.props.getIngredients();
  };
  render() {
    if (this.props.userLogState.jwt) {
      return (
        <div className="userStore">
          <Store
            databaseIngredients={this.props.ingredients}
            categories={this.props.categories}
            user={this.props.userLogState}
          ></Store>
        </div>
      );
    }
    return (
      <div className="guestStore">
        <Store
          databaseIngredients={this.props.ingredients}
          categories={this.props.categories}
        ></Store>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userLogState: state.userLogState,
    ingredients: state.ingredient.all,
    categories: state.ingredient.categories,
  };
}
const mapDispatchToProps = {
  getIngredients,
  getCategories,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StoreContainer)
);
