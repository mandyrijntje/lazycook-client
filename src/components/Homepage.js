import React from "react";
import "./Homepage.css";

export default class Homepage extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="home">
        <img
          className="homepage-img"
          src={require("../assets/images/bg.png")}
          alt=""
        />
        <div className="description">
          <h1>Why do you need LazyCook?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo ante ut elit porttitor, non hendrerit dolor ornare.
            Suspendisse venenatis eros ac scelerisque aliquam. Maecenas ut odio
            consequat, suscipit mi eu, efficitur leo. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Phasellus elementum vehicula erat. Praesent consectetur
            velit urna, vitae dapibus justo ullamcorper nec. Sed bibendum nisi
            in ipsum tempus, vitae sodales nisi fermentum.
          </p>
        </div>
      </div>
    );
  }
}
