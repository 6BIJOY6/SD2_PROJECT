import React from 'react'
import Layout from './../components/Layout/Layout';


const LogIn = () => {
  return (
    <Layout>
      <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Log In</h2>
        <form className="login-form">
          <input type="text" className="login-input" placeholder="Username" />
          <input type="password" className="login-input" placeholder="Password" />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">Don't have an account? <a href="/signup" className="signup-link">Sign Up</a></p>
      </div>
    </div>
    </Layout>
  )
}

export default LogIn