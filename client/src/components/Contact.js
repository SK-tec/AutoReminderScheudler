import { Container, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import axios from "../axiosInstance";
import Modal from "react-bootstrap/Modal";
const Contact = () => {
  const [enquiryForm, setEnquiryForm] = useState({});
  const [status, setStaus] = useState(false);
  const showMessage = () => setStaus(true);
  const closeMessage = () => setStaus(false);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm({ ...enquiryForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enquiryForm);
    axios
      .post("/api/enquiry", enquiryForm)
      .then((res) => {
        console.log(res);
        setMessage("Enquiry Sent");
        showMessage();
        handleReset();
      })
      .catch((err) => {
        console.log(err);
        setMessage("Please Enter valid Input.");
        showMessage();
      });
  };
  const handleReset = () => {
    formRef.current.reset();
  };

  return (
    <>
      <Container id="Enquiry" className="w-50 text-center">
        <Card.Title className="text-center p-3">
          Enquiry Form
        </Card.Title>

        <Card.Text className="enquiry-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-4 pt-3">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="First Name LastName"
                  name="fullName"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-4 "
              controlId="formHorizontalMother"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="Email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalMother"
            >
              <Form.Label column sm={2}>
                Phone
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalMother"
            >
              <Form.Label column sm={2}>
                Query
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Ask your question..."
                  name="query"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Button type="submit" className="mt-2 mb-4">
              Submit
            </Button>
          </Form>
        </Card.Text>
      </Container>

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
    </>
  );
};

export default Contact;
