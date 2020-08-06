import React, { Component } from "react";
import InputBox from "./inputBox";
import "./create.component.css";
import axios from "axios";

export class create extends Component {
  state = {
    title: "",
    link: "",
    summary: "",
    token: 0,
  };

  loginPage = () => {
    window.location = "/login";
  };

  componentDidMount() {}

  onSubmitHandler = (event) => {
    event.preventDefault();

    const blog = {
      title: this.state.title,
      url: this.state.link,
      summary: this.state.summary,
    };
  };

  titleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  linkChange = (event) => {
    this.setState({
      link: event.target.value,
    });
  };

  summaryChange = (event) => {
    this.setState({
      summary: event.target.value,
    });
  };

  CreateComp = () => {
    if (this.state.token == 1) {
      return (
        <form className="form1" onSubmit={this.onSubmitHandler}>
          <h1>ADD NEW BLOG !</h1>
          <InputBox
            onchange={this.titleChange}
            name="Title"
            placeholder="Enter Title Here .."
          />
          <InputBox
            onchange={this.linkChange}
            name="Link"
            placeholder="Paste link Here .."
          />
          <div className="summary">
            <div className="summaryStyle"> Summary</div>
            <textarea
              name="summary"
              onChange={this.summaryChange}
              className="textarea"
              placeholder="About this photo .."
            ></textarea>
          </div>
          <div className="buttondiv1">
            <button type="submit" className="btn btn-primary butTon">
              {" "}
              Submit
            </button>
          </div>
        </form>
      );
    } else if (this.state.token == 0) {
      return (
        <div className="logoutBox">
          <div className="logout">
            you need to login first before adding another blog
          </div>
          <h4>to login click the button </h4>
          <button onClick={this.loginPage} className=" btn btn-primary">
            click to login
          </button>
        </div>
      );
    }
  };

  render() {
    return <div className="createComp">{this.CreateComp()}</div>;
  }
}

export default create;
