import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Topics from "./Topics";
// import Settings from "./Settings";

class DynamicImport extends Component {
  state = {
    component: null
  };

  componentDidMount() {
    this.props.load().then(mod =>
      this.setState(() => ({
        component: mod.default
      }))
    );
  }

  render() {
    return this.props.children(this.state.component);
  }
}

const Settings = props => {
  return (
    <DynamicImport load={() => import("./Settings")}>
      {Component =>
        Component === null ? <h1>Loading</h1> : <Component {...props} />
      }
    </DynamicImport>
  );
};

const App = () => {
  return (
    <h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/topics" component={Topics} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </h1>
  );
};

export default App;
