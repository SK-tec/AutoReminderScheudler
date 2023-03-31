import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Notices() {
  return (
    <Container id="notice" className=" d-flex flex-wrap">
      <Container id="Enquiry" className="mt-4 w-50 ">
        <Card.Title className="bg-warning text-center p-2">
          Enquiry Form
        </Card.Title>

        <Card.Text className="enquiry-form">
          <Form.Group
            as={Row}
            className="mb-3 pt-3"
            controlId="formHorizontalFather"
          >
            <Form.Label column sm={2}>
              Name
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
            className="mb-3 "
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
            className="mb-3 "
            controlId="formHorizontalMother"
          >
            <Form.Label column sm={2}>
              Phone
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Phone Number" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3 "
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
              />
            </Col>
          </Form.Group>
          <Button type="submit" className="mt-1 mb-3">
            Submit
          </Button>
        </Card.Text>
      </Container>

      <Container id="Enquiry" className="mt-4 w-50 ">
        <lable>
          <Card.Title className="bg-warning text-center p-2 ">
            Notice
          </Card.Title>
        </lable>
        <ListGroup as="ol" className="px-4" variant="flush" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex bg-transparent    align-items-start"
          >
            <Container className="ms-2 text-start  me-auto">
              <Container className="fw-bold">School reopens</Container>
              we welcome all students in new classes!
            </Container>
            <Col sm={3}>
              <Badge bg="success" pill>
                14/06/2023
              </Badge>
            </Col>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex bg-transparent   align-items-start"
          >
            <Container className="ms-2 text-start me-auto">
              <Container className="fw-bold">1st Semester Exam</Container>
              Midterm 100 marks Exams will take place
            </Container>
            <Col sm={3}>
              <Badge bg="success" pill>
                10/09/2023
              </Badge>
            </Col>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex bg-transparent  align-items-start"
          >
            <Container className="ms-2 text-start me-auto">
              <Container className="fw-bold">Annual function</Container>
              Prize Distribution and Cultural Program
            </Container>
            <Col sm={3}>
              <Badge bg="success" pill>
                12/12/2023
              </Badge>
            </Col>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex bg-transparent   align-items-start"
          >
            <Container className="ms-2 text-start me-auto pb-4">
              <Container className="fw-bold ">Sports week</Container>
              Annual Sports Competition
            </Container>
            <Col sm={3}>
              <Badge bg="success" pill>
                12/12/2023
              </Badge>
            </Col>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Container>
  );
}

export default Notices;
