import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { getUser } from "../state/user";

export default function SignIn() {
  const [input, setInput] = useState({
    password: "",
    email: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const { target } = event;
    setInput({ ...input, [target.name]: target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    return axios
      .post("/api/auth/login", input)
      .then((res) => res.data)
      .then((user) => dispatch(getUser(user)))
      .then((res) => history.push("/home"))
      .catch((err) => alert("datos incorrectos"));
  };

  return (
    <div>
      <Navbar transparent={false} />
      <div className="container-fluid py-4 d-grid gap-3 d-flex justify-content-center ">
        <div className="col-4 bg-light border rounded align-center p-3">
          <h1 className="text-center fs-2">Sign In</h1>
          <form
            className="form-style justify-content-between"
            onChange={changeHandler}
            onSubmit={submitHandler}
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label  fs-6">
                Email*
              </label>
              <input
                type="text"
                className="form-control  fs-7"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label  fs-6">
                Password *
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label fs-6" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
            <h3 className="text-center  fs-6 mt-2">Or</h3>
            <div className="mb-3">
              <button type="submit" className="btn btn-danger my-2">
                Google
              </button>
              <button type="submit" className="btn btn-primary my-2">
                Facebook
              </button>
            </div>

            <h3 className="text-center  fs-6 mt-2">Don't have an account?</h3>
            <Link
              style={{ color: "red" }}
              className="nav-link active text-center  fs-5"
              to="/signup"
            >
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
