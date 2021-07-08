import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import navbarChange from '../utils/navbarChange'
import { removeUser } from '../state/user'
import { removeCart } from '../state/cart'

export default function Nav({ transparent = true }) {
  const user = useSelector((state) => state.user)
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  console.log(location);

  useEffect(() => {
    if (location.pathname === '/home') navbarChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const signOut = (event) => {
    event.preventDefault()
    axios
      .put('/api/auth/logout')
      .then((res) => dispatch(removeUser()))
      .then(res => dispatch(removeCart()))
      .then((res) => history.push('/home'))
  }

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark amatic ${
          transparent ? `bg-trasparent fixed-top` : `bg-dark shadow`
        }`}
      >
        <div className='container-fluid'>
          <img
            className='ms-4 mt-3'
            src='https://i0.wp.com/www.ecoledesurfmoliets.com/wp-content/uploads/2018/01/logo-surf.png?fit=288%2C288&ssl=1'
            alt='logo'
            width='60'
            height='60'
          />
          <Link className='nav-link active' to='/home'>
            <h2 className='navbar-brand ms-1 my-0 fs-1'>
              board<span style={{ color: 'red', fontSize: '3.2rem' }}>4</span>
              life
            </h2>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end me-5 " id="navbarNav">
            <ul className="navbar-nav mt-2">
              <li className="nav-item nav-option mx-4 fs-3">
                <Link className="nav-link active " to="/home" onClick={()=>window.scrollTo(0,0)}>
                  Home
                </Link>
              </li>
              <li className='nav-item nav-option mx-4 my-auto fs-3'>
                <a className='nav-link active ' href='/home#aboutUs'>
                  About Us
                </a>
              </li>
              <li className='nav-item nav-option mx-4 my-auto fs-3'>
                <Link
                  style={{ color: 'red' }}
                  className='nav-link active'
                  to='/shop'
                  onClick={()=>window.scrollTo(0,0)}
                >
                  Shop
                </Link>
              </li>
              {user.isAdmin && (
                <li className='nav-item nav-option mx-4 my-auto fs-3'>
                  <Link className='nav-link active' to='/admin' onClick={()=>window.scrollTo(0,0)}>
                    ADMIN
                  </Link>
                </li>
              )}
              {user.id && !user.isAdmin && (
                <li className='nav-item nav-option mx-4 my-auto fs-3'>
                  <Link className='nav-link active' to='/orders' onClick={()=>window.scrollTo(0,0)}>
                    My orders
                  </Link>
                </li>
              )}
              {!user.id ? (
                <li className='nav-item nav-option mx-4 my-auto fs-3'>
                  <Link className='nav-link active' to='/signin' onClick={()=>window.scrollTo(0,0)}>
                    Sign In
                  </Link>
                </li>
              ) : (
                <li className='nav-item nav-option mx-4 my-auto fs-3'>
                  <Link
                    className='nav-link active'
                    onClick={signOut}
                    to='/home'
                  >
                    Sign Out
                  </Link>
                </li>
              )}
              {user.firstName && (
                <li
                  className='nav-item nav-option ms-5 my-auto fs-3'
                  style={{ color: 'white' }}
                >
                  Hello {user.firstName}
                </li>
              )}
              <li className='nav-item nav-option ms-5 my-auto fs-3'>
                <Link
                  className='nav-link active'
                  to={`${user.id ? '/cart' : '/signin'}`}
                  onClick={()=>window.scrollTo(0,0)}
                >
                  <i className='bi bi-cart3'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
