import { Container, Card, Row, Col } from "react-bootstrap";
import Boy from "../images/boy.jpeg";
import Girl from "../images/girl.jpeg";

const Achivements = () => {
  return (
    <div className="eqbg p-3">
    <Container id="achievements" className="mt-5 mb-5 px-3">
      <h1>Achievements</h1>
      <Row xs={2} lg={4}>
        <Col>
          <Card className="mb-2">
            <Card.Img variant="top" src={Boy} />
            <Card.Body>
              <p className="text-center">Achivement #1</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Img variant="top" src={Girl} />
            <Card.Body>
              <p className="text-center">Achivement #1</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Img variant="top" src={Boy} />
            <Card.Body>
              <p className="text-center">Achivement #1</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Img variant="top" src={Girl} />
            <Card.Body>
              <p className="text-center">Achivement #1</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Achivements;
