import React from "react";
import { useState } from "react";
import {
  Container,
  Form,
  InputGroup,
  Button,
  Card,
  Modal,
} from "react-bootstrap";

import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";

const Signin = ({ setIsLoggedin }) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", admin)
      .then((res) => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <Container className="py-5 mb-5 ">
      <Card border="secondary" className="mt-5" id="signin">
        <Form className="py-5" id="singin-form">
          <Form.Group className="formgroup mb-4">
            <Form.Label>
              {" "}
              <h4>E-Mail</h4>
            </Form.Label>
            <InputGroup className="w-100">
              <InputGroup.Text id="email">
                <i className="text-dark fa fa-envelope pt-0"></i>
              </InputGroup.Text>
              <Form.Control
                type="email"
                required
                placeholder="Enter E-mail Address"
                name="email"
                value={admin.email}
                onChange={handleChange}
              ></Form.Control>
            </InputGroup>
            <small id="emailHelpId" className="form-text text-muted mb-3" />
          </Form.Group>

          <Form.Group className="mb-4 mt-5">
            <Form.Label>
              {" "}
              <h4>Password</h4>{" "}
            </Form.Label>
            <InputGroup>
              <InputGroup.Text id="password">
                <i className="text-dark fa fa-key pt-0"></i>
              </InputGroup.Text>
              <Form.Control
                type="password"
                required
                placeholder="Enter Password"
                name="password"
                value={admin.password}
                onChange={handleChange}
              ></Form.Control>
            </InputGroup>
          </Form.Group>
          <Button
            block="true"
            size="md"
            className="mt-5"
            type="submit"
            onSubmit={handleSubmit}
          >
            {" "}
            Sign In{" "}
          </Button>
        </Form>
      </Card>
      {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid Email / Password !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Container>
  );
};

export default Signin;
