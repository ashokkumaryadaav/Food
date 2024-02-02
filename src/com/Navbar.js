import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav className='nav'>

      <div className='col d-flex justify-content-center align-items-center'>
        <h3 className='h31'>Food Recipe</h3>
      </div>
      <div className='col me-3 d-flex justify-content-center align-items-center'>
      <Link className='a' to='/Dash'>Home</Link>
<Link className='a' to='/Cart'>Cart</Link>
<Link className='a' to='/Map'>Map</Link>
<Link className='a' to='/Blog'>Blog</Link>


</div>

    </nav>
    <div className='d'></div>
    
    
    </>
  )
}


