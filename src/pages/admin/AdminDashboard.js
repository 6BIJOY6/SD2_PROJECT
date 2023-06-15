import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/auth';
import AdminMenu from '../../components/Layout/AdminMenu';

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 shadow p-3  rounded">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
              <h3> Admin Address : {auth?.user?.address}</h3>
            </div>
            <div className="profile_image">
            <img className="img-fluid" src='https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?w=740&t=st=1686841912~exp=1686842512~hmac=8187ce8e8c618a187ca4486901f77c7485528c01c8cdd8a4de46c1df732d6495' alt="profile_img"></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard