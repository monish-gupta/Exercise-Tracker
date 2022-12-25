import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.js";
import ExercisesList from "./components/Exercises-list.js";
import EditExercise from "./components/Edit-exercise.js";
import CreateExercise from "./components/create-exercise.js";
import CreateUser from "./components/create-user.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onRouteChange = this.onRouteChange.bind(this);
    this.setId = this.setId.bind(this);
    this.state = {
      route: "exercise",
      id: "",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  setId = (id) => {
    this.setState({ id: id });
  };

  render() {
    return (
      <div>
        <Navbar onRouteChange={this.onRouteChange} />
        {this.state.route === "create-exercise" ? (
          <CreateExercise />
        ) : this.state.route === "create-user" ? (
          <CreateUser />
        ) : this.state.route === "edit-exercise" ? (
          <EditExercise id={this.state.id} />
        ) : (
          <ExercisesList
            onRouteChange={this.onRouteChange}
            setId={this.setId}
          />
        )}
      </div>
    );
  }
}

export default App;
