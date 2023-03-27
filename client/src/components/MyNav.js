import logo from "../images/Kidzee_logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import NavLink from 'react-router-dom'



const MyNav = () => {
    return ( 
    <>
    
      <Navbar className="Navbar" varient="light" >
      <div className="container">
          <img src={logo}  
              width="90"
              height="70"
              className="d-inline-block align-top" 
              alt="Kidzee_logo" />
        </div>
        <Container >
        
          <Nav className="me-auto Nav">
          
            <Nav.Link href="#home">Home</Nav.Link>
         
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#admission">Admission</Nav.Link>
            <Nav.Link href="#Administration">Administration</Nav.Link>
            <Nav.Link href="#Login"><i className="bi bi-person-fill"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    
    </> 
    );
}
 
export default MyNav;