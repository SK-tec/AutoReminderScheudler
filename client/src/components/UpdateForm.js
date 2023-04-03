import axios from "../axiosInstance";
import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Row, Col, Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const UpdateForm = ({ id }) => {
  //const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({});
  const formRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    //console.log(e.target.name);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleReset = () => {
    formRef.current.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`/api/students/${id}`)
      .then((res) => {
        setForm(res.data);
        console.log(res.data.dueDate);
      }, [])
      .catch((e) => console.log(e));
    handleShow();
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`/api/students/${id}`, form)
        .then((res) => {
          setMessage("Data Updated successfully");
          console.log(res);

          handleReset();
          navigate(`/admin`);
        })
        .catch((err) => {
          setMessage("Input Data Error");

          console.log(err);
        });
    }
  };

  const handleRemove = () => {
    axios
      .delete(`/api/students/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <Button variant="link" onClick={handleClick}>
        <i class="bi bi-pencil-square"></i>
      </Button>
      <Modal show={show} onHide={handleClose} className="my-modal">
        <Modal.Header closeButton>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={formRef} onSubmit={handleSave}>
            <Card.Text className="personal-info">
              <Row className="mb-3">
                <Form.Group as={Col} md="6" className=" mt-3">
                  <Form.Label>First name: </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    className="w-75 mx-auto mt-2"
                    name="firstName"
                    value={form.firstName}
                    readOnly
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
                    value={form.lastName}
                    readOnly
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
                    value={form.email}
                    readOnly
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Class</Form.Label> <br />
                  <Form.Control
                    aria-label="Default select example"
                    className="w-75 mx-auto mt-2"
                    type="text"
                    name="class_name"
                    value={form.class_name}
                    readOnly
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="mb-2">
                <Form.Group as={Row} className="mb-3 mt-3">
                  <Form.Label column sm={2}>
                    Due Fee
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control
                      type="text"
                      placeholder="Remaining Fee"
                      name="dueFee"
                      value={form.dueFee}
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
                      value={form.dueDate}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              </Row>
            </Card.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default UpdateForm;
