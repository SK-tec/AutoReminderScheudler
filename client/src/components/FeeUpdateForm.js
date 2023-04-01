import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container, Card, Modal } from "react-bootstrap";
import axios from "../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

const FeeUpdateForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  
  useEffect(() => {
    console.log(id);
    axios
      .get(`/api/students/${id}`)
      .then((res) => setStudent(res.data))
      .catch((e) => console.log(e));
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleReset = () => {
    formRef.current.reset();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
if(id){
    axios
      .put(`/api/students/${id}`, form)
      .then((res) => {
        setMessage("Data Updated successfully");
        console.log(res);
        handleShow();
        handleReset();
        navigate(`/admin`);
      })
      .catch((err) => {
        setMessage("Input Data Error");
        handleShow();
        console.log(err);
      });
    }
  };
  return (
    <>
      <Container className="register-form  mt-5 d-flex justify-content-center">
        <Card border="secondary" className="w-75 ">
          <Card.Header>
            {" "}
            <h4> Fee Update Form</h4>
          </Card.Header>

          <Form ref={formRef} onSubmit={handleSubmit}>
             <Card.Text className="personal-info">
              <Row className="mb-3">
                <Form.Group as={Col} md="6" className=" mt-3">
                  <Form.Label>First name: {student.firstName}</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    className="w-75 mx-auto mt-2"
                    name="firstName"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" className=" mt-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    className="w-75 mx-auto mt-2"
                    name="lastName"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              
              <Row className="mb-2">
                <Form.Group as={Col} md="6">
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email Id"
                    className="w-75 mx-auto mt-2"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" >
                  <Form.Label>Class</Form.Label> <br />
                  <Form.Select
                    aria-label="Default select example"
                    className="w-75 mx-auto mt-2"
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

                <Row className="mb-2">
                <Form.Group as={Row} className="mb-3 mt-3" >
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
                
                <Form.Label column sm={3}>
                  Due Date
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="date"
                    placeholder="Due date"
                    name="dueDate"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              
              </Row>
            </Card.Text>
            

            <Button type="submit" className="mb-3">
              Update
            </Button>
            
          </Form>
        </Card>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default FeeUpdateForm;
