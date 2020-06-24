import React from "react";
import "./index.css";
import Startup from "./components/startup";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Create from "./components/create";
import Riddles from "./components/riddles";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={Create} />
        <Route exact path="/riddles" component={Riddles} />
      </Switch>
    </div>
  );
}

export default App;
