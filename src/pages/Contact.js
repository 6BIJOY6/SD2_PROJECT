import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import "../Style/contact.css";

export default function ContactUs() {
  return (
    <Layout>
      <Container className="my-3 contact">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get In Touch</h3>
            <address>
              <strong>Email: bijoyj66@gmail.com</strong>
              <br />
              <br />
              <strong>Phone: 01838489200</strong>
            </address>
            <p>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                illum dolore, neque soluta sint dolor eligendi eum doloremque!
                Fugiat blanditiis, mollitia fuga consequatur libero veritatis
                praesentium molestiae fugit? Magni, vero.
              </h4>
            </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact_form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-5"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-5"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="text"
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-5"
                name="message"
                id="message"
                placeholder="Your Message"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="from-group">
                  <button className="btn ac_btn" type="submit">
                    Drop
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
