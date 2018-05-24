import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BoardContainer from "./js/components/boards/BoardContainer";
import ListTasksContainer from "./js/components/tasks/ListTasksContainer";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
              </Link>
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Route path="/" exact={true} component={BoardContainer} />
            <Route path="/board/:id" component={ListTasksContainer} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
