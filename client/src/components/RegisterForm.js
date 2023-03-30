import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container, Card } from "react-bootstrap";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(gender);
    // setForm({ ...form, gender: gender });
    console.log(form);

    axios
      .post(`/api/students`, form)
      .then((res) => navigate(`/`))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Container className="register-form  mt-5 d-flex justify-content-center">
        <Card border="secondary" className="w-75 ">
          <Card.Header>
            {" "}
            <h2> Registration Form</h2>
          </Card.Header>
          <Form onSubmit={handleSubmit}>
            <Card.Title className="text-start p-3">Student Info</Card.Title>
            <Card.Text className="personal-info">
              <Row className="mb-3">
                <Form.Group as={Col} md="6" className="mb-3 mt-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    className="w-75 mx-auto mt-3"
                    name="firstName"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3 mt-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    className="w-75 mx-auto mt-3"
                    name="lastName"
                    onChange={handleChange}
                  />
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
                    name="dob"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" mb-3 mt-3>
                  <Form.Label>Gender</Form.Label> <br />
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type="radio"
                    value="male"
                    className="m-4"
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type="radio"
                    className="m-4"
                    value="female"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3 pb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    required
                    type="input"
                    placeholder="Age"
                    className="w-75 mx-auto mt-3"
                    name="age"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" mb-3 mt-3>
                  <Form.Label>Class</Form.Label> <br />
                  <Form.Select
                    aria-label="Default select example"
                    className="w-75 mx-auto mt-3"
                    name="class_name"
                    onChange={handleChange}
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
                </Form.Group>
              </Row>
            </Card.Text>
            <Card.Title className="text-start p-3">Parents Info</Card.Title>
            <Card.Text className="parent-info">
              <Form.Group as={Row} className="mb-3 pt-3 ">
                <Form.Label column xs={4} md={2}>
                  Father Name
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="text"
                    placeholder="First Name and LastName"
                    name="fatherName"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 mt-2 ">
                <Form.Label column xs={4} md={2}>
                  Mother Name
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="text"
                    placeholder="First Name and LastName"
                    name="motherName"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 mt-4">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="Email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 mt-3 pb-3">
                <Form.Label column sm={2}>
                  Phone
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
            </Card.Text>
            <Card.Title className="text-start p-3">Fee Details</Card.Title>
            <Card.Text className="parent-info">
              <Form.Group as={Row} className="mb-3 pt-3 ">
                <Form.Label column sm={2}>
                  Tution Fee
                </Form.Label>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="Total Fee"
                    name="tutionFee"
                    onChange={handleChange}
                  />
                </Col>
                <Form.Label column sm={2}>
                  Paid Fee
                </Form.Label>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="Paid Fee"
                    name="paidFee"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 mt-2 ">
                <Form.Label column sm={2}>
                  Due Fee
                </Form.Label>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="Remaining Fee"
                    name="dueFee"
                    onChange={handleChange}
                  />
                </Col>
                <Form.Label column sm={2}>
                  Installments
                </Form.Label>
                <Col sm={4}>
                  <Form.Select
                    aria-label="Default select installments"
                    className="w-75"
                    name="installments"
                    onChange={handleChange}
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
                  <Form.Control
                    type="date"
                    placeholder="Due date"
                    name="dueDate"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
            </Card.Text>

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
