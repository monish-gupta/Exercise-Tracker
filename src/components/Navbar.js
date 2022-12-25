import React, { Component } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";

// import ExercisesList from "./Exercises-list.js";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg pa3 mb3">
        <button
          className="navbar-brand"
          onClick={() => this.props.onRouteChange("exercise")}
        >
          Excercise Tracker
        </button>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <button
                className="nav-link"
                onClick={() => this.props.onRouteChange("exercise")}
              >
                Exercises
              </button>
            </li>
            <li className="navbar-item">
              <button
                className="nav-link"
                onClick={() => this.props.onRouteChange("create-exercise")}
              >
                Create Exercise Log
              </button>
            </li>
            <li className="navbar-item">
              <button
                className="nav-link"
                onClick={() => this.props.onRouteChange("create-user")}
              >
                Create User
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
