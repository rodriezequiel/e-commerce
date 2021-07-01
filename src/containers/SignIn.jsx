import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SignIn() {
  return (
    <div>
      <Navbar transparent={false} />
      <div className="container-fluid pt-3 d-flex d-flex justify-content-between">
        <div className=" flex-column  position-absolute top-50 start-50 translate-middle">
          <h1 className="text-center">Sign In</h1>
          <form className="form-style justify-content-between">
            <div className="mb-3">
              <label for="email" className="form-label">
                Email*
              </label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password *
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
            <h3 className="text-center">Or</h3>
            <div className="mb-3">
              <button type="submit" className="btn btn-danger">
                Google
              </button>
              <button type="submit" className="btn btn-primary">
                Facebook
              </button>
            </div>

            <h3>Don't have an account?</h3>
            <Link
              style={{ color: "red" }}
              className="nav-link active text-center"
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
