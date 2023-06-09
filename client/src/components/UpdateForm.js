import axios from "../axiosInstance";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Row, Col, Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

export const UpdateForm = ({ id, setIsUpdated }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [status, setStaus] = useState(false);
  const showMessage = () => setStaus(true);
  const closeMessage = () => setStaus(false);
  const [form, setForm] = useState({});
  const formRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFetch = (e) => {
    axios
      .get(`/api/students/${id}`)
      .then((res) => {
        setForm(res.data);
      })
      .catch((e) => console.log(e));
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleFetch();
    handleShow();
  };
  const handleReset = () => {
    formRef.current.reset();
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`/api/students/${id}`, form)
        .then((res) => {
          setMessage("Data Updated successfully");
          setIsUpdated(true);

          handleReset();
          handleClose();
          showMessage();
          navigate(`/admin`);
        })
        .catch((err) => {
          setMessage("Input Data Error");
          handleShow();
          handleClose();
          showMessage();

          console.log(err);
        });
    }
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
                  <Form.Label>First name</Form.Label>
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
                    onChange={handleChange}
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
                <Form.Group as={Col} md="6" className="mb-3 mt-3">
                  <Form.Label row sm={3}>
                    Due Fee
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Remaining Fee"
                    className="w-75 mx-auto mt-2"
                    name="dueFee"
                    value={form.dueFee}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3 mt-3">
                  <Form.Label row sm={3}>
                    Due Date:{moment(form.dueDate).format("MM/DD/YYYY")}
                  </Form.Label>

                  <Form.Control
                    type="date"
                    placeholder="Due date"
                    className="w-75 mx-auto mt-2"
                    name="dueDate"
                    //value={moment(form.dueDate).format("MM/DD/YYYY")}
                    onChange={handleChange}
                  />
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
      {/* <Button variant="primary" onClick={handleShow}>
        OK
      </Button> */}

      <Modal show={status} onHide={closeMessage} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeMessage}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default UpdateForm;
