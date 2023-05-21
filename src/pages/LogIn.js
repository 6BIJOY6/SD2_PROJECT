import React from 'react'
import Layout from './../components/Layout/Layout';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';

const LogIn = () => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();



  //form function
  const handleSubmit =   async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login",{
        email,
        password
      });
          if(res && res.data.success){
            toast.success( res.data && res.data.message)
            setAuth({
              ...auth,
              user: res.data.user,
              token: res.data.token,
            });


            navigate('/')
          }
          else{
            toast.error(res.data.message)
          }

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong");
    }
  }

  return (
    <Layout>
      <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Log In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" className="login-input" placeholder="Username"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className="login-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">Don't have an account? <a href="/signup" className="signup-link">Sign Up</a></p>
        <button
            className="forgot-password-button"
          onClick={() => {navigate('/forgotpassword')}}>
            Forgot Password
          </button>

      </div>
    </div>
    </Layout>
  )
}

export default LogIn