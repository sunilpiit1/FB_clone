import React from "react";
import "./home.component.css";

export default function home() {
  return (
    <div className="home1">
      <h1>hello world !</h1>
      <h3>This is a blog site where you can post Blogs !! </h3>
      <h5>you guys can see your blogs in the blogs section</h5>
      <button className="btn btn-primary linkbutton">
        <a className="blogslink" href="/blogs">
          see blogs
        </a>{" "}
      </button>
    </div>
  );
}
