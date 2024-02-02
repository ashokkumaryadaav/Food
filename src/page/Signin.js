import React from 'react'
import './Add.css'
import {useNavigate} from 'react-router-dom';

export default function Signin() {

  


  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/Signup');
  };
  const navigateDash = () => {
    // 👇️ navigate to /
    navigate('/Dash');
  };
  return (
    <>
    <body className='bgbg'>
      <div className='bg'>

      <div class="box">
          <form >
            <span className='text-center text-center1'>login</span>
          <div className='input-container'>
            <input type='text' name='uname' required />
            <label>User Name</label>		
          </div>
          <div className='input-container'>		
            <input type='password' name='pwd' required />
            <label>Password</label>
          </div>
            <button onClick={navigateDash}  class=" btn1 mb-3">submit</button>
            <p onClick={navigateHome} style={{color:'white'}}>New User? Please Register</p>
        </form>	
</div>


      </div>


    </body>
    
    
    </>
  )
}

