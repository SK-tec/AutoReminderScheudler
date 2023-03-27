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

const Signin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="py-5 mb-5 ">
      <Card border="secondary" className="mt-5" id="signin" >
        <Form className="py-5" id="singin-form">
          <Form.Group className="formgroup mb-4">
            <Form.Label> <h4>E-Mail</h4>
            </Form.Label>
            <InputGroup className="w-100">
              <InputGroup.Text id="email">
                <i className="text-dark fa fa-envelope pt-0"></i>
              </InputGroup.Text>
              <Form.Control
                type="email"
                required="true"
                placeholder="Enter E-mail Address"                
              ></Form.Control>
            </InputGroup>
            <small id="emailHelpId" className="form-text text-muted mb-3"/>            
            
          </Form.Group>

          <Form.Group className="mb-4 mt-5">
            <Form.Label> <h4>Password</h4> </Form.Label>
            <InputGroup>
              <InputGroup.Text id="password">
                <i className="text-dark fa fa-key pt-0"></i>
              </InputGroup.Text>
              <Form.Control
                type="password"
                required="true"
                placeholder="Enter Password"
              ></Form.Control>
            </InputGroup>
          </Form.Group>
          <Button block="true" size="md" className="mt-5" type="submit" onClick={handleShow}>
            {" "}
            Sign In{" "}
          </Button>
        </Form>
      </Card>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid Email / Password !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Signin;