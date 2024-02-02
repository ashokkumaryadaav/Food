import React from 'react'
import './Add.css'
import {useNavigate} from 'react-router-dom';

export default function Signup() {

    const navigate = useNavigate();
    const navigateHome = () => {
      navigate('/');
    };
  return (
    <>
    <body className='bgbg'>
      <div className='bg'>

      <div class="box">
          <form>
            <span className='text-center text-center1'>Register</span>
          <div className='input-container'>
            <input type={'text'} required/>
            <label>User Name</label>		
          </div>
          <div className='input-container'>
            <input type={'email'} required/>
            <label>Email ID</label>		
          </div>
          <div className='input-container'>		
            <input type={'password'} required/>
            <label>Password</label>
          </div>
          <div className='input-container'>
            <input type={'number'} required/>
            <label>Number</label>		
          </div>
            <button  class=" btn1 mb-2">submit</button>
            <p onClick={navigateHome} style={{color:'white'}}>You Have Acc? Please Login</p>
        </form>	
      </div>
     </div>
    </body>
  </>
  )
}
