import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "./App.css";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div className="projects">
      <h1>Projects</h1>
      <div className="ui grid">
        <Thumbnail
          className="four wide column"
          link="https://intense-sands-46818.herokuapp.com/"
          image="https://i.imgur.com/AbfEFPc.png"
          title="Feedback Retriever"
          category=""
        />
        <Thumbnail
          className="four wide column"
          link="https://immense-crag-89739.herokuapp.com/"
          image="https://i.imgur.com/TvP0kts.png"
          title="Video Player"
          category=""
        />
        <Thumbnail
          className="four wide column"
          link="https://obscure-anchorage-81398.herokuapp.com/"
          image="https://i.imgur.com/Lr4n05i.png"
          title="Image Search"
          category=""
        />
        <Thumbnail
          className="four wide column"
          link="https://protected-journey-84821.herokuapp.com/"
          image="https://i.imgur.com/SJoL8aG.png"
          title="Blog Post List"
          category=""
        />
        <Thumbnail
          className="four wide column"
          link="/"
          image="http://bit.ly/2Z3SRmB"
          title="Streams Placeholder"
          category=""
        />
      </div>
    </div>
  );
}

export default Projects;
