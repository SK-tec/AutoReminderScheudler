import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/Kidzee_logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import RegisterForm from "./RegisterForm";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import StudentDetails from "./StudentDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Admin = () => {
  return (
    <>
    <Container fluid className="sideNav">
      <Row>
        <Col xs={1} md={1} id="sidebar" className="col-auto  bg-[#649632]">
          <LinkContainer to="/">
            <Navbar.Brand href="#home">
              {/* <img className="logo mt-3" src={logo} alt="KidzeeLogo" /> */}
            </Navbar.Brand>
          </LinkContainer>
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
        <Col xs={11} id="tabs" className="col">
          <div style={{ display: "block", padding: 30 }}>
            <Tabs defaultActiveKey="second">
              <Tab eventKey="first" title="Register">
                <RegisterForm />
              </Tab>
              <Tab eventKey="second" title="Fee">
                <StudentDetails />
              </Tab>
              <Tab eventKey="third" title="Attendance">
                Hii, I am Attendance tab and it's Underconstruction
              </Tab>
              <Tab eventKey="fourth" title="Others">
                Hii, Underconstruction
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
  </Container>
    </> 
  );
};
          {/* <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey={<RegisterForm />}>
                Register
              </Nav.Link>
              Hii, I am Register tab content
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="link-1">
                Fee
              </Nav.Link>
              Hii, I am Fee tab content
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="disabled">
                Record
              </Nav.Link>
            </Nav.Item>
          </Nav> */}
        

export default Admin;
