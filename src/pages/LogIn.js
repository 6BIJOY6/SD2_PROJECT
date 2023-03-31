import React from 'react'
import Layout from './../components/Layout/Layout';
import { NavLink } from 'react-bootstrap';

const LogIn = () => {
  return (
    <Layout>
    <section className="signin">
      <div className="container mt-5">
        <div className="signin-content">
        <div className="signin-image">
                <figure>
                  <img src="https://cdn.dribbble.com/users/324533/screenshots/1419546/e-commerce.gif" alt=""></img>
                </figure>
                <NavLink to="/signup" className="signup-image-link">Create your Account
                </NavLink>
              </div>

          
          <div className="signup-form">
            <h2 className="from-title"> Log in </h2>
              <form className="register-form" id="register-form">
                
                <div className="form-group">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="text" name="email" id="email" autoComplete="off" placeholder="your Email"/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off" placeholder="your password"/>
                </div>

                
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                </div>
              </form>
              </div>
              
            
          
        </div>

      </div>

    </section>
    </Layout>
  )
}

export default LogIn