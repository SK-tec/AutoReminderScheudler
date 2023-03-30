import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/Kidzee_logo.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import RegisterForm from './RegisterForm';



const Admin = () => {
    return ( 
    <div className='container-fluid sideNav'>
        <div className='row'>
            <div id="sidebar" className='col-auto min-vh-100 bg-[#649632]'>
            <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <img
              className="logo mt-3"
              src={logo}             
              alt="KidzeeLogo"
            />
          </Navbar.Brand>
        </LinkContainer>
                <ul >
                    <li>                        
                        <LinkContainer to="/">
                            <Nav.Link className="navLink py-5 fs-5">
                                <i className='bi bi-info-circle-fill' />
                                <span className='ms-1 d-none d-sm-inline'>Staff</span>
                            </Nav.Link>
                        </LinkContainer>
                    </li>
                    <li>                       
                        <LinkContainer to="/">
                            <Nav.Link className="navLink py-5 fs-5">
                            <i className='bi-people-fill' /> 
                            <span className='ms-1 d-none d-sm-inline'>Students</span>
                            </Nav.Link>
                        </LinkContainer>
                    </li>
                    <li>                        
                        <LinkContainer to="/">
                            <Nav.Link className="navLink py-5 fs-5">
                            <i className='bi-table' />
                            <span className='ms-1 d-none d-sm-inline'>Events</span>
                            </Nav.Link>
                        </LinkContainer>
                    </li>
                    <li>
                        <LinkContainer to="/">
                            <Nav.Link className="navLink py-5 fs-5">
                            <i className='bi bi-three-dots-vertical' /> 
                            <span className='ms-1 d-none d-sm-inline'>More</span>
                            </Nav.Link>
                        </LinkContainer>
                    </li>
                </ul>

            </div>
            <div id='tabs' className="col">
            <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link className='text-dark' eventKey={<RegisterForm />}>Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-dark' eventKey="link-1">Fee</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-dark' eventKey="disabled">Record</Nav.Link>
                </Nav.Item>
            </Nav>
            </div>
        </div>
    </div> 
    );
}
 
export default Admin;