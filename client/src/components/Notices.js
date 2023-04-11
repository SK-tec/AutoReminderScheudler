import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import unsplash from "../images/unsplash.jpg";

function Notices() {
  return (
    <>
      <h2
        style={{ fontFamily: "Rampart One", color: "navy" }}
        className="mb-4 mt-4 text-center shadow-5-strong"
      >
        Welcome To Kidzee
      </h2>
      <h4 style={{ color: "green" }}>Your Door To The Future</h4>
      <div className="container">
        <p style={{ color: "navy" }}>
          A learning community dedicated to building respectful and responsible
          citizens and empowering all learners. Working collaboratively to
          ensure every student grows academically, socially, and emotionally. We
          teach, model, and encourage a love of learning, collaboration, and
          compassion for others.
        </p>
      </div>

      <Container  id="notice" className=" d-flex ">
        <Row  className="mx-0 px-0 ">
          <Col sm={5} id="Enquiry" className=" p-0 m-0">
            <img
              id="noticeImg"
              className="w-100 h-100"
              as={Row}
              src={unsplash}
              alt="notice"
            />
          </Col>
          <Col sm={7} className=" p-0 m-0 ">
            <ListGroup as="ol" className="w-100 h-100 " >
              <lable>
                <Card.Title className="bg-warning text-center py-4 px-0">
                  <i class="bi bi-stars"></i> Upcoming Events{" "}
                  <i class="bi bi-stars"></i>
                </Card.Title>
              </lable>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start text-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">School reopens</div>
                  we welcome all students in new classes!
                </div>
                <Badge bg="primary" pill>
                  14/06/2023
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start text-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Parents' meet</div>
                  Open day!
                </div>
                <Badge bg="primary" pill>
                  15/06/2023
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start text-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">1st Semester Exam</div>
                  Midterm 100 marks Exams will take place
                </div>
                <Badge bg="primary" pill>
                  10/09/2023
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start text-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Annual function</div>
                  Prize Distribution and Cultural Program
                </div>
                <Badge bg="primary" pill>
                  12/12/2023
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start text-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Sports week</div>
                  Annual Sports Competition
                </div>
                <Badge bg="primary" pill>
                  12/01/2024
                </Badge>
              </ListGroup.Item>
              
              
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Notices;
