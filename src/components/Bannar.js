import React from 'react';
import { Carousel } from 'react-bootstrap';

const Bannar = () => {
  return (
    <section>
      <div className="my-3">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 banner-image"
              src="https://techbigs.com/uploads/2021/10/pc-creator-pro-pc-building-simulator-game-thumbnail.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 banner-image"
              src="https://www.aliteq.com/wp-content/uploads/2021/05/custom-pc-builder-nepal-Aliteq-GG-Recovered.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 banner-image"
              src="https://www.aliteq.com/wp-content/uploads/2021/02/custom-pc-build-in-nepal-aliteq-001-1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Bannar;
