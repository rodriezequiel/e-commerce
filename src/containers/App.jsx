import React from "react";
import { Route, Switch, Redirect} from "react-router";
import Index from "./Index"

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/home" component={Index} />
          <Redirect from="/" to="/home" />
        </Switch>
    </div>
  )
}

export default App
