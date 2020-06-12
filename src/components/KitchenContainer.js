import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Kitchen from "./Kitchen";
import { getIngredients, getCategories } from "../store/actions/ingredient";

class KitchenContainer extends React.Component {
  async componentDidMount() {
    await this.props.getCategories();
    await this.props.getIngredients();
  }

  render() {
    if (this.props.userLogState.jwt) {
      return (
        <div className="kitchenContainer">
          <Kitchen
            databaseIngredients={this.props.ingredients}
            categories={this.props.categories}
          />
        </div>
      );
    }
    return (
      <div className="letOp">
        Forbidden territory. Be a good kid and{" "}
        <Link to={`/login`}> log in </Link>or{" "}
        <Link to={`/signup`}> sign up</Link>.
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
  connect(mapStateToProps, mapDispatchToProps)(KitchenContainer)
);
