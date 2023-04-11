import { Container, Row, Col } from "react-bootstrap";

import logo from "./images/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <Container >
        <Row xs={2} md={4} >
          <Col className="footer-col mt-4">
            <h4>Main Menu</h4>
            <p>About US</p>
            <p>Admissions</p>
            <p>School Uniform</p>
            <p>Carrer</p>
            <p>FAQ's</p>
            <p>Blogs</p>
          </Col>
          <Col className="footer-col mt-4">
            <h4>Useful Links</h4>
            <p>Transport Policy</p>
            <p>School Song</p>
            <p>Social Outreach</p>
            <p>Download Brochure</p>
            <p>Sitemap</p>
          </Col>
          <Col className="footer-col mt-4">
            <h4>Contact Us</h4>
            <p>+91 6225 0098 12</p>
            <p>kidzee@kidzee.com</p>
            <p>Mahatma Gandhi Road, 40721, India</p>
          </Col>
          <Col className="justify-content-center">
            <Row className="mt-4 mx-auto">
              <img src={logo} className="rounded mx-auto d-block" alt=""/>
            </Row>
            <Row className="social-icons" xs={4} >
              <Col className="facebook">
                <FaFacebook />
              </Col>
              <Col className="insta">
                <FaInstagram />
              </Col>
              <Col className="twitter">
                <FaTwitter />
              </Col>
              <Col className="linkedin">
                <FaLinkedin />
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
