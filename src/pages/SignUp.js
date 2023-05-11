import React from 'react'
import Layout from './../components/Layout/Layout';
import Signup_pic from './../img/undraw_sign_up_n6im.svg'


const SignUp = () => {
  return (
    <Layout>
    <div className="main-container">
      <div className="image-container">
        <img src={Signup_pic} alt="Signup" />
      </div>
      <div className="form-container">
        <h2 className="signup_heading">Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name" className='signup_label'>Name</label>
            <input type="text" id="name" className='signup_input'/>
          </div>
          <div className="form-group">
            <label htmlFor="email" className='signup_label'>Email</label>
            <input type="email" id="email" className='signup_input'/>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className='signup_label'>Phone</label>
            <input type="tel" id="phone" className='signup_input'/>
          </div>
          <div className="form-group">
            <label htmlFor="address" className='signup_label'>Address</label>
            <input type="text" id="address" className='signup_input'/>
          </div>
          <div className="form-group">
            <label htmlFor="password" className='signup_label'>Password</label>
            <input type="password" id="password" className='signup_input' />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className='signup_label'>Confirm Password</label>
            <input type="password" id="confirm-password" className='signup_input' />
          </div>
          <button type="submit" className='signup_button'>Sign Up</button>
        </form>
        <p className='p_head'>
          Already have an account? <a className='l_p' href="/login">Login</a>
        </p>
      </div>
    </div>
    </Layout>
  )
}

export default SignUp