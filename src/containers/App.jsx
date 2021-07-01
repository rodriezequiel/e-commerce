import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./Home";
import Shop from "./Shop";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
