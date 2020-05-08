import React from "react";
import "./Homepage.css";

export default class Homepage extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="home">
        <img
          className="homepage-img"
          src={require("../assets/images/bg2.png")}
          alt=""
        />
        <div className="description">
          <h1>Why do you need LazyCook?</h1>
          <p>
            Because, let's face it, you're lazy but you need to eat something
            every once in a while. Vestibulum commodo ante ut elit porttitor,
            non hendrerit dolor ornare. Suspendisse venenatis eros ac
            scelerisque aliquam. Maecenas ut odio consequat, suscipit mi eu,
            efficitur leo. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Phasellus elementum
            vehicula erat. Praesent consectetur velit urna. Sed bibendum nisi in
            ipsum tempus.
          </p>
        </div>
      </div>
    );
  }
}
