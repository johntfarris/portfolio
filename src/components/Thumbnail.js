import React from "react";
import "./App.css";

function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image" />
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </a>
    </div>
  );
}

export default Thumbnail;
