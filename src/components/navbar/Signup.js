import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <>
    <div className="body">
  <div className="box">
        <input type="checkbox" className="toggle" name="" />
        <div className="signUp">
            <div className="input-group">
                <label htmlFor="name">Username</label>
                <input type="text" placeholder="Example.abc" className="inp inpp" name="name" />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Example.abc@gmail.com" className="inp" name="email" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="*******" className="inp" name="password" />
            </div>
            <div className="input-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date"  className="inp" name="dob" />
            </div>
            <div className="input-group" >
                
                <input type="submit" value="Sign Up"  className="inp sub-inp" />
            </div>
        </div>
        <div className="login">
            
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Example.abc@gmail.com" className="inp" name="email" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="*******" className="inp" name="password" />
            </div>
            
            <div className="input-group" >
                
                <input type="submit" value="Login"  className="inp sub-inp" />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup