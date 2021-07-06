import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const [input, setInput] = useState({
    isAdmin: false,
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });  
  
  
  

  const history = useHistory();

  const changeHandler = (event) => { 
    
    const { target } = event;
    setInput({ ...input, [target.name]: target.value });
  };

  
   

  const submitHandler = (event) => {
    event.preventDefault();
    
    return axios
      .post("/api/auth/register", input)
      .then((res) => history.push("/signin"))
      .catch((err) => alert("error al crear el usuario, revise los datos"));
  };



  return (
    <div>
      <Navbar transparent={false} />
      <div className="container-fluid py-4 d-grid gap-3  d-flex justify-content-center ">
        <div className="col-4 bg-light border align-center p-3">
          <h1 className="text-center">Register</h1>
          <form
            className="form-style justify-content-between"
            onChange={changeHandler}
            onSubmit={submitHandler}
          >

            <div className='mb-2'>
              <label htmlFor='firstname' className='form-label descripcionAU fs-6'>
                First name *
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstName"
                value={input.fisrtName}
              />
            </div>

            <div className='mb-2'>
              <label htmlFor='lastName' className='form-label descripcionAU fs-6'>
                Last name *
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={input.lastName}
              />
            </div>

            <div className='mb-2'>
              <label htmlFor='email' className='form-label descripcionAU fs-6'>
                Email *
              </label>
              <input
                type="email"
                className="form-control is-valid"
                id="email"
                name="email"
                value={input.email}
              />
              
            </div>

            <div className='mb-2'>
              <label htmlFor='InputPassword' className='form-label descripcionAU fs-6'>
                Password *
              </label>
              <input
                type="password"
                className="form-control"
                id="InputPassword"
                name="password"
                value={input.password}
              />
            </div>

            <button type='submit' className='btn btn-dark mt-4'>
              Submit
            </button>
            <Link
              style={{ color: "red" }}
              className="nav-link active text-center"
              to="/signin"
            >
              Back to login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
