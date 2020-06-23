import React from "react";
import "./index.css";
import Home from "./register.js/home";
import About from "./register.js/about";
import Create from "./register.js/create";
import Villains from "./register.js/villains";
import Startup from "./register.js/startup";
import Register from "./register.js/register";
import Login from "./register.js/login";
import Squads from "./register.js/squads";
import Edit from "./register.js/edit-squad";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route path="/home" component={Home} />
        <Route path="/villains" component={Villains} />
        <Route path="/create" component={Create} />
        <Route path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/squads" component={Squads} />
        <Route path="/edit-squad" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
