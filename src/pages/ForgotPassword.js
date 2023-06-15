import React from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  
  const navigate = useNavigate();



  //form function
  const handleSubmit =   async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password",{
        email,
        newPassword,
        answer
      });
          if(res && res.data.success){
            toast.success( res.data && res.data.message)


            navigate('/login')
          }
          else{
            toast.error(res.data.message)
          }

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong"+ error.message);
    }
  }
  return (
    <Layout>
      <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Reset Password</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" className="login-input" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className="login-input" placeholder="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
          <input type="text" className="login-input" placeholder="Enter your father's name" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
          
          <button type="submit" className="login-button">Submit</button> 
        </form>
        <p className="signup-text">Don't have an account? <a href="/signup" className="signup-link">Sign Up</a></p>
      </div>
    </div>

    </Layout>
  )
}

export default ForgotPassword