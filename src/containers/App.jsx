import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { useDispatch } from 'react-redux'
import { getCart } from '../state/cart'
import Home from './Home'
import Shop from './Shop'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SingleProduct from '../components/SingleProduct'
import Footer from '../components/Footer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])
  return (
    <div>            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/shop/:name' render={() => <SingleProduct />} />
        <Route exct path='/shop' component={Shop} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
