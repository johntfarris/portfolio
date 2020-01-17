import React from "react";
import "./App.css";

function Thumbnail(props) {
  return (
    <div className="project ui medium image bordered">
      <a href={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project link" />
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </a>
    </div>
  );
}

export default Thumbnail;
