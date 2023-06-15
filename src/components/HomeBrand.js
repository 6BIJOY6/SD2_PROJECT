import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HomeBrand = () => {
  return (
    <div className='mx-6 shadow p-3 mb-2 bg-dark rounded mt-4'>
      <div className='brand_title text-center mt-7 mx-7'>
        <h1 className='text-info'>Brand partner</h1>
      </div>
      <Container fluid>
        <Row className='mx-5 display-flex justify-center md-3 sm-1 lg-5'>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center '>
            <img className='w-25 brand_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2048px-Dell_logo_2016.svg.png' alt='Dell' />
          </Col>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://seeklogo.com/images/R/republic-of-gamers-new-logo-C7B28EBFFE-seeklogo.com.png' alt='Dell' />
          </Col>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_retina/public/IntelGreen.jpg?itok=--K0mY6h' alt='Dell' />
          </Col>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png' alt='Dell' />
          </Col>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://static.techgoing.com/2022/09/4AROratQ-Nvidia.4.png' alt='Dell' />
          </Col>
        </Row>
        <Row className='mx-5'>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://w7.pngwing.com/pngs/484/598/png-transparent-amd-advanced-micro-devices-white-hd-logo.png' alt='Dell' />
          </Col>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://tradepac.com.sg/image/cache/product-images/GIGABYTE%20.%20LOGO-300x300.jpg' alt='Dell' />
          </Col>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://logos-world.net/wp-content/uploads/2022/03/ADATA-Logo-700x394.png' alt='Dell' />
          </Col>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://e7.pngegg.com/pngimages/690/524/png-clipart-laptop-msi-logo-video-game-laptop-electronics-computer.png' alt='Dell' />
          </Col>
          <Col className='shadow p-3 mb-5 bg-dark rounded d-flex justify-content-center align-items-center'>
            <img className='w-25 brand_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuq1HnN88mRT-c1z0LylaycyHSfEJvyY11A&usqp=CAU' alt='lexar' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeBrand;
