import React, { Component } from "react";
import "./LoginForm.css";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="loginForm">
        <form className="" onSubmit={this.props.onSubmit}>
          <div className="form-group col-12">
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
            />
          </div>
          <div className="form-group col-12">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
            />
          </div>

          <button type="submit" className="libutton">
            Login
          </button>
        </form>
      </div>
    );
  }
}
