import React from 'react'
import "./login.css"
import {SiGmail} from 'react-icons/si'
import LOGO from "../../assest/logo.png"

const Login = () => {
  return (
    <div className='login_body'>
      <div className="logo_log">
        <img src={LOGO} alt="" />
      </div>
      <div className="login_content">
      <div className="login_text">
        <h1>Log in or create an <br /> account</h1>
      </div>
      <form action="" className='form_log'>
        <label htmlFor="">Your email address</label>
        <input type="email" name="login" id="login_email" placeholder='Your email address' />
        <button className='login_btn' type='submit'>Next</button>
      </form>
      <div className="divider_log">
        or
      </div>
      <div className="buttons_log">
        <div className="btn_log">
          <SiGmail/>
          <span>Continue with google</span>
        </div>
        <div className="btn_log">
          <SiGmail/>
          <span>Continue with google</span>
        </div>
        <div className="btn_log">
          <SiGmail/>
          <span>Continue with google</span>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Login