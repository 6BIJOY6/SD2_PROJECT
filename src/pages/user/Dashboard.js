import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth';

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 shadow p-3  rounded">
              <h3> Name:{auth?.user?.name}</h3>
              <h3>Email:{auth?.user?.email}</h3>
              <h3>Address:{auth?.user?.address}</h3>
            </div>
            <div className='profile_image'>
              <img className="img-fluid" src='https://img.freepik.com/free-vector/tiny-people-businessman-with-shield-protecting-data-laptop-data-privacy-information-privacy-regulation-personal-data-protection-concept-bright-vibrant-violet-isolated-illustration_335657-1005.jpg?w=826&t=st=1686841544~exp=1686842144~hmac=3458ddcb636ee8044cf81a0eeaf341738f8fa07accd0eb5670178254da7fb6d4' alt="profile_img"></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard