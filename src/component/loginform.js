import React from 'react'

const Loginform = () => {
  return (
   
   <div className="mainbox">
    <h1>LOGIN</h1>
    <div>
   <label htmlFor='email'>USERNAME: </label>
    <input type="text" placeholder="Enter Username"></input>
    </div>
    <div>
   <label htmlFor="password">PASSWORD: </label>
    <input type="text" placeholder="Enter Password"></input>
    </div>
    <button type="submit">LOGIN</button>
    <p>Forgot Password? <a href="abc.in">click here</a></p>
    <p className="text"> Or login using </p>
    <p>Google</p>
   <div className="a">
      <div className='Microsoft'></div>
      <div classname='Google'></div>
   </div>
   
    </div>
    
  )
}

export default Loginform


    