// Import React, BrowserRouter, Link, NavLink, Redirect, Prompt
import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";
import Route from "react-router-dom/Route";

//when logged in , shows the users name

const User = params => {
  return <h1> Welcome User {params.username} </h1>;
};

class App extends Component {
  state = {
    loggedIn: false
  };
  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>

            <NavLink to="/second" exact activeStyle={{ color: "green" }}>
              Second Page
            </NavLink>

            <NavLink to="/third" exact activeStyle={{ color: "green" }}>
              Third Page
            </NavLink>

            <NavLink to="/user/login" exact activeStyle={{ color: "green" }}>
              User login
            </NavLink>

            <NavLink to="/user/logout" exact activeStyle={{ color: "green" }}>
              User Logout
            </NavLink>
          </nav>

          <Prompt
            when={!this.state.loggedIn}
            message={location => {
              return location.pathname.startsWith("/user")
                ? "Are you sure?"
                : true;
            }}
          />

          <Route
            path="/"
            exact
            strict
            render={() => {
              return <h1>Welcome to Soundr</h1>;
            }}
          />
          <Route
            path="/about"
            exact
            strict
            render={() => {
              return <h1>Welcome About</h1>;
            }}
          />
          <Route
            path="/user/:username"
            exact
            strict
            render={({ match }) =>
              this.state.loggedIn ? (
                <User username={match.params.username} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
