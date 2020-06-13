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
          <h1 className="h1desc">Why do you need LazyCook?</h1>
          <p className="pdesc">
            Because, let's face it, you're lazy but you need to eat something
            every once in a while. From the basements of Nederland comes your
            saviour, Lazycook. Create an account, then go to your kitchen, then
            come back here, I meant go to the Kitchen™ (in the user navigation
            bar), play with ingredients, generate recipes. Make and share your
            recipes with the world. Be happy. Live free. Find some bread in your
            fridge and wipe your tears with it. Love whoever you want. Lekker
            leven, lekker eten.
          </p>
        </div>
      </div>
    );
  }
}
