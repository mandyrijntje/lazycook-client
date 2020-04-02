import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/user";

class Navbar extends Component {
  onLogout = () => {
    this.props.logout();
  };
  render() {
    if (!this.props.userLogState.jwt) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top mt-0">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active mx-5">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/store" className="nav-link mx-5">
                  Store
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top mt-0">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active mx-5">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/kitchen" className="nav-link mx-5">
                  Kitchen
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/store" className="nav-link mx-5">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recipe" className="nav-link mx-5">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link mx-5">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={this.onLogout} className="nav-link mx-5">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

function mapStateToProps(state) {
  return { userLogState: state.userLogState };
}
const mapDispatchToProps = { logout };
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
