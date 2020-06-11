import React, { Component } from "react";
import "./SignupForm.css";

export default class SignupForm extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="loginGif">
          <img src={require("../assets/images/login.gif")} alt="Log in gif" />
        </div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group col-12">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.props.onChange}
              value={this.props.values.email}
            />
          </div>
          <div className="form-group col-12">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.props.onChange}
              value={this.props.values.password}
            />
          </div>

          <button type="submit" className="sibutton">
            Signup
          </button>
        </form>
      </div>
    );
  }
}
