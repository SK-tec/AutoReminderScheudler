import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { LinkContainer } from "react-router-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import RegisterForm from "./RegisterForm";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import StudentDetails from "./StudentDetails";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Admin = () => {
  return (
    <>
      <Container fluid className="sideNav">
        <Row>
          <Col xs={1} md={1} id="sidebar" className="col-auto  bg-[#649632]">
            <ul>
              <li>
                <LinkContainer to="/">
                  <Nav.Link className="navLink py-5 fs-5">
                    <i className="bi bi-info-circle-fill" />
                    <span className="ms-1 d-none d-sm-inline">Staff</span>
                  </Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/">
                  <Nav.Link className="navLink py-5 fs-5">
                    <i className="bi-people-fill" />
                    <span className="ms-1 d-none d-sm-inline">Students</span>
                  </Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/">
                  <Nav.Link className="navLink py-5 fs-5">
                    <i className="bi-table" />
                    <span className="ms-1 d-none d-sm-inline">Events</span>
                  </Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/">
                  <Nav.Link className="navLink py-5 fs-5">
                    <i className="bi bi-three-dots-vertical" />
                    <span className="ms-1 d-none d-sm-inline">More</span>
                  </Nav.Link>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col xs={11} id="tabs">
            <Tabs defaultActiveKey="second" className="mb-3 ">
              <Tab eventKey="first" title="Register">
                <RegisterForm />
              </Tab>
              <Tab eventKey="second" title="Fee">
                <StudentDetails />
              </Tab>

              <Tab eventKey="fourth" title="Others">
                Hi, Attendance and other Features are Under Developement
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
