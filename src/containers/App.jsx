import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../state/cart";
import Home from "./Home";
import Shop from "./Shop";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SingleProduct from "../components/SingleProduct";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import AdminContainer from "../containers/AdminContainer";
import AdminProducts from "../components/Admin/AdminProducts";
import axios from "axios";
import { getUser } from "../state/user";
import Users from "../components/Admin/Users";
import Orders from "../components/Admin/Orders";
import Category from "../components/Admin/AdminCategory";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((res) => res.data)
      .then((user) => dispatch(getUser(user)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    if (user.id) {
      dispatch(getCart());
    }
  }, [dispatch, user]);

  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/shop/:name" render={() => <SingleProduct />} />
        <Route exct path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/admin" component={AdminContainer} />
        <Route exact path="/admin/productos" component={AdminProducts} />
        <Route exact path="/admin/users" component={Users} />
        <Route exact path="/admin/orders" component={Orders} />
        <Route exact path="/admin/categories" component={Category} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
