import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Container, Card } from "react-bootstrap";
const RegisterForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <Container className="register-form w-75 mt-5 d-flex justify-content-center">
        <Card border="secondary" className="w-75 ">
          <Card.Header>
            {" "}
            <h2> Registration Form</h2>
          </Card.Header>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Card.Title className="text-start p-3">Personal Info</Card.Title>
            <Card.Text className="personal-info">
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="mb-3 mt-3"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    className="w-75 mx-auto mt-3"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom02"
                  className="mb-3 mt-3"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    className="w-75 mx-auto mt-3"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="Date of Birth"
                    className="w-75 mx-auto mt-3"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom02"
                  mb-3
                  mt-3
                >
                  <Form.Label>Gender</Form.Label> <br />
                  <Form.Check
                    inline
                    label="Male"
                    name="group1"
                    type="radio"
                    className="m-4"
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="group1"
                    type="radio"
                    className="m-4"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3 pb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    required
                    type="input"
                    placeholder="Age"
                    className="w-75 mx-auto mt-3"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom02"
                  mb-3
                  mt-3
                >
                  <Form.Label>Class</Form.Label> <br />
                  <Form.Select
                    aria-label="Default select example"
                    className="w-75 mx-auto mt-3"
                  >
                    <option>Select Class</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Card.Text>
            <Card.Title className="text-start p-3">Parents Info</Card.Title>
            <Card.Text className="parent-info">
              <Form.Group
                as={Row}
                className="mb-3 pt-3 "
                controlId="formHorizontalFather"
              >
                <Form.Label column sm={2}>
                  Father Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" placeholder="First Name" />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" placeholder="Last Name" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 mt-2 "
                controlId="formHorizontalMother"
              >
                <Form.Label column sm={2}>
                  Mother Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control type="text" placeholder="First Name" />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" placeholder="Last Name" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 mt-4"
                controlId="formHorizontalMother"
              >
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={5}>
                  <Form.Control type="Email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 mt-3 pb-3"
                controlId="formHorizontalMother"
              >
                <Form.Label column sm={2}>
                  Phone
                </Form.Label>
                <Col sm={5}>
                  <Form.Control type="text" placeholder="Phone Number" />
                </Col>
              </Form.Group>
            </Card.Text>
            <Card.Title className="text-start p-3">Fee Details</Card.Title>
            <Card.Text className="parent-info">
              <Form.Group
                as={Row}
                className="mb-3 pt-3 "
                controlId="formHorizontalFather"
              >
                <Form.Label column sm={2}>
                  Tution Fee
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="text" placeholder="Total Fee" />
                </Col>
                <Form.Label column sm={2}>
                  Paid Fee
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="text" placeholder="Paid Fee" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 mt-2 "
                controlId="formHorizontalMother"
              >
                <Form.Label column sm={2}>
                  Due Fee
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="text" placeholder="Remaining Fee" />
                </Col>
                <Form.Label column sm={2}>
                  Installments
                </Form.Label>
                <Col sm={4}>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-75"
                  >
                    <option>Select Installments</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 mt-4 pb-3"
                controlId="formHorizontalMother"
              >
                <Form.Label column sm={2}>
                  Due Date
                </Form.Label>
                <Col sm={5}>
                  <Form.Control type="date" placeholder="Due date" />
                </Col>
              </Form.Group>
            </Card.Text>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" className="mb-3">
              Submit form
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default RegisterForm;
