import React from 'react'
import './Add.css'
import {useNavigate} from 'react-router-dom';

export default function Mapview() {

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/Map');
  };
  return (
    <>
    
      <div className='col mt-2'>
      <h2 className='fh'>Find Your Favourite Hotel</h2>
      </div>
      <div className='col ms-2'>
        <button className='bb' onClick={navigateHome}>Back</button>
      </div>
      <div className='container mt-3'>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=pollachi hotels food&t=&z=10&ie=UTF8&iwloc=&output=embed" ></iframe></div></div>
      </div>
    
    </>
  )
}
