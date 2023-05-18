import React ,{useState} from 'react'
import Layout from './../components/Layout/Layout';
import Signup_pic from './../img/undraw_sign_up_n6im.svg'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  


  //form function
  const handleSubmit =   async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register",{
        name,
        email,
        phone,
        address,
        password,
        answer

      });
          if(res && res.data.success){
            toast.success(res.data.message)
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
    <div className="main-container">
      <div className="image-container">
        <img src={Signup_pic} alt="Signup" />
      </div>
      <div className="form-container">
        <h2 className="signup_heading">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className='signup_label'>Name</label>
            <input type="name" value={name} onChange={(e) => setName(e.target.value)} id="name" className='signup_input' placeholder='Enter your name' required/>
          </div>
          <div className="form-group">
            <label htmlFor="email" className='signup_label'>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className='signup_input' placeholder='Enter your Email' required/>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className='signup_label'>Phone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" className='signup_input' placeholder='Enter your Phone' required/>
          </div>
          <div className="form-group">
            <label htmlFor="address" className='signup_label'>Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} id="address" className='signup_input' placeholder='Enter your Address' required/>
          </div>
          <div className="form-group">
            <label htmlFor="address" className='signup_label'>Father's name</label>
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} id="answer" className='signup_input' placeholder='Enter your father name' required/>
          </div>
          <div className="form-group">
            <label htmlFor="password" className='signup_label'>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className='signup_input' placeholder='Enter your Password' required/>
          </div>
          {/* <div className="form-group">
            <label htmlFor="confirm-password" className='signup_label'>Confirm Password</label>
            <input type="password" id="confirm-password" className='signup_input' />
          </div> */}
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