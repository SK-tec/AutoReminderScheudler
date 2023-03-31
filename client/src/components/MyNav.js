import logo from "../images/Kidzee_logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useState, useEffect } from "react";
import axios from "../axiosInstance";

const MyNav = ({ isLoggedin, setIsLoggedin }) => {
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    axios
      .get("/auth/loggedin-user")
      .then((res) => {
        setAdmin(res.data);
        setIsLoggedin(true);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [isLoggedin]);
  const handleLogout = () => {
    axios.post("/auth/logout", {}).then((res) => {
      console.log("Logged out");
      window.location.reload();
    });
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="bootom"
        variant="dark"
        className="Navbar"
      >
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="KidzeeLogo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 justify-content-end">
            <LinkContainer to="/">
              <Nav.Link className="navLink">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="navLink">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="navLink">Contact</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/admin">
              <Nav.Link className="navLink">Admin </Nav.Link>
            </LinkContainer> */}

            <LinkContainer to="/signin">
              {admin ? (
                <div>
                  <div> {admin.username}</div>
                  <button onClick={handleLogout}>
                    Logout{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </button>
                </div>
              ) : (
                <Nav.Link className="navLink">
                  Admin
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </Nav.Link>
              )}
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNav;
