import React from "react";
import { Route, Switch, Redirect} from "react-router";
import Home from "./Home"
import Shop from "./Shop";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exct path="/shop" component={Shop}/>
          <Redirect from="/" to="/home" />
        </Switch>
    </div>
  )
}

export default App
