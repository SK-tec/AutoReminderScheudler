import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Notices() {
  return (
    <>
    <container>
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
    </container>
    <container>
        <lable>
            <h4>Notice Board</h4>
        </lable>
    <ListGroup as="ul" bullets>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">School reopens</div>
          we welcome all students in new classes. Hearty congratulations! 
        </div>
        <Badge bg="success" pill>
          14/06/2023
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="success" pill>
          10/09/2023
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Prize Distribution and Cultural Program
        </div>
        <Badge bg="success" pill>
          12/12/2023
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    </container>
    </>
  );
}

export default Notices;