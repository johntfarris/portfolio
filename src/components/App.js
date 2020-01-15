import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="ui pointing menu">
            <div className="right menu">
              <div className="item">
                <Link to="/">About</Link>
              </div>
              <div className="item">
                <Link to="/projects">Projects</Link>
              </div>
              <div className="item">
                <Link to="/resume">Resume</Link>
              </div>
              <div className="item">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className="body">
            <Route path="/" exact component={Profile} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
