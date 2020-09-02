import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
// import Checkout from "./Checkout";

class CheckoutContainer extends React.Component {
  async componentDidMount() {
 
  }

  render() {
    if (this.props.userLogState.jwt) {
      return (
        <div className="checkoutContainer">
          {/* <Checkout
            key={value}
          /> */}
          Checkout goes here
        </div>
      );
    }
    return (
      <div className="checkoutDivIllegal">
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
  };
}
const mapDispatchToProps = {
  
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
);
