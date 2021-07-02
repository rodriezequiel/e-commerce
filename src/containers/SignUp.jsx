import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function SignUp() {
  return (
    <div>
      <Navbar transparent={false} />
      <div className='container-fluid py-4 d-grid gap-3  d-flex justify-content-center'>
        <div className='col-4 bg-light border align-center p-3'>
          <h1 className='text-center'>Register</h1>
          <form className='form-style justify-content-between'>
            <div className='mb-3'>
              <label for='firstname' className='form-label'>
                First name *
              </label>
              <input type='text' className='form-control' id='firstname' />
            </div>
            <div className='mb-3'>
              <label for='lastName' className='form-label'>
                Last name *
              </label>
              <input type='text' className='form-control' id='lastName' />
            </div>
            <div className='mb-3'>
              <label for='email' className='form-label'>
                Email *
              </label>
              <input type='email' className='form-control' id='email' />
            </div>
            <div className='mb-3'>
              <label for='exampleInputPassword1' className='form-label'>
                Password *
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <button type='submit' className='btn btn-dark'>
              Submit
            </button>
            <Link
              style={{ color: 'red' }}
              className='nav-link active text-center'
              to='/signin'
            >
              Back to login
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
