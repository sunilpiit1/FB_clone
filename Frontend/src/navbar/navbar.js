import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  state = {
    token: 0,
  };

  InOut = () => {
    console.log(this.state.token);

    if (this.state.token == 1) {
      return (
        <div onClick={this.logOut} className="login">
          Log out
        </div>
      );
    } else {
      return (
        <Link to="/login" className="login">
          Log in
        </Link>
      );
    }
  };

  render() {
    return (
      <div id="navbar" className="navbarBox" name="navbar">
        <div className="bar"></div>
        <div className="menuitems">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/blogs" className="blogs">
            Blogs
          </Link>
          <Link to="/create" className="add">
            Add_blog
          </Link>
          <div className="freespace"></div>
          <Link to="/signup" className="blogs">
            SignUp
          </Link>

          {this.InOut()}
        </div>
      </div>
    );
  }
}

//rfc and rcc can be used as a shortcut for component layout directly c for class based and f for function based
