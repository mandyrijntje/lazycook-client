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
        <nav className="navbar">
          <div className="navbar-div">
            <ul className="navbar-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/store" className="nav-link">
                  Store
                </Link>
              </li>
            </ul>
            <ul className="navbar-list">
              <li className="nav-item">
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
        <nav className="navbar">
          <div className="navbar-div">
            <ul className="navbar-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/kitchen" className="nav-link">
                  Kitchen
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/store" className="nav-link">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recipe" className="nav-link">
                  Recipes
                </Link>
              </li>
            </ul>
            <ul className="navbar-list">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={this.onLogout} className="nav-link">
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
