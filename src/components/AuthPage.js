import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./AuthPage.css";
import LoginFormContainer from "./LoginFormContainer";

class AuthPage extends React.Component {
  render() {
    if (!this.props.userLogState.jwt) {
      return (
        <div className="authPage">
          <div className="loginGif">
            <img src={require("../assets/images/login.gif")} alt="Log in gif" />
          </div>
          <LoginFormContainer />
          <p className="signupLink">
            Not a member yet? Only members get{" "}
            <strong>three free bananas</strong> on orders over 200€!{" "}
          </p>
          <p>
            <Link className="subutton" to="/signup">
              Join
            </Link>
          </p>
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}
function mapStateToProps(state) {
  return { userLogState: state.userLogState };
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
