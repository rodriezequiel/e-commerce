import React from 'react'
import Navbar from '../components/Navbar'
import ShopHeader from '../components/ShopHeader'
import Card from '../components/Card'

export default function Shop() {
  return (
    <>
      <Navbar transparent={false} />
      <ShopHeader />
      <div className='container-fluid bg-dark pt-3'>
        <div className=' d-flex row justify-content-center'>
          <div className='col-3 pt-3 fs-3'>
            <div className='list-group list-group-flush amatic'>
              <a className='list-group-item bg-dark text-white text-center'>
                An item
              </a>
              <a className='list-group-item bg-dark text-white text-center'>
                A second item
              </a>
              <a className='list-group-item bg-dark text-white text-center'>
                A third item
              </a>
              <a className='list-group-item bg-dark text-white text-center'>
                A fourth item
              </a>
              <a className='list-group-item bg-dark text-white text-center'>
                And a fifth one
              </a>
            </div>
          </div>
          <div className='col-9 bg-light'>
            <div className='row d-flex justify-content-start pt-3 mx-5'>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
