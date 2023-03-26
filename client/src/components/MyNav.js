import logo from "../images/Kidzee_logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const MyNav = () => {
    return ( 
    <>
    
      <Navbar bg="success" variant="dark">
        <div className="container">
          <img src={logo}  width="90" height="70" className="d-inline-block align-top" alt="Kidzee_logo" />
        </div>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    
    </> 
    );
}
 
export default MyNav;