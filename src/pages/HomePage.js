import React from 'react'
import Layout from '../components/Layout/Layout'
import { Carousel } from 'react-bootstrap'

const HomePage = () => {
  return (
    <Layout>
        <div className="my-3">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://techbigs.com/uploads/2021/10/pc-creator-pro-pc-building-simulator-game-thumbnail.jpg"
            alt="First slide"
            width={"700"}
            height="800"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.aliteq.com/wp-content/uploads/2021/05/custom-pc-builder-nepal-Aliteq-GG-Recovered.jpg"
            alt="2nd slide"
            width={"700"}
            height="800"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.aliteq.com/wp-content/uploads/2021/02/custom-pc-build-in-nepal-aliteq-001-1.jpg"
            alt="3rd slide"
            width={"700"}
            height="800"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </Layout>
  )
}

export default HomePage