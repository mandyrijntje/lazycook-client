import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EventCard extends Component {

  render() {
    // console.log(
    //   `CARD USER`,
    //   this.props.user,
    //   this.props
    // );
    const now = new Date();
    const updated = new Date(this.props.recipe.updatedAt);
    const hours = Math.abs(now - updated) / 36e5;

    return (
      <div className="col-lg-4 col-md-6 col-12" key={this.props.recipe.id}>
        <h1 className="text-center">
          <Link to={`/recipe/${this.props.recipe.id}`}>
            {this.props.recipe.name}
          </Link>
        </h1>
        <h3 className="text-center">
          {" "}
          Created by:{" "}
          <Link to={`/users/${this.props.user.id}`}>
            {this.props.user.email}
          </Link>
        </h3>
        <h3 className="text-center">
          {this.props.recipe.ingredients} 
        </h3>
        <img src={this.props.recipe.imageUrl} alt="" className="mr-3" />
        <p className="text-center"> {this.props.recipe.step1} </p>
        <p> Uploaded {Math.round(hours / 24)} days ago</p>
        <div>
         
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state.event.eventTickets
  };
}
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
