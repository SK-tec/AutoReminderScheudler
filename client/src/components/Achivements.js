import { Container, Card, Row, Col } from "react-bootstrap";
import Boy from "../images/boy.jpeg";
import Girl from "../images/girl.jpeg";
import Achivements3 from "../images/Achivements3.jpg";
import boy2 from "../images/boy2.png";
const Achivements = () => {
  return (
    <div className="eqbg pt-3 pb-3">
    <Container id="achievements" className="mt-5 mb-5">
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
            <Card.Img variant="top" src={boy2} />
            <Card.Body>
              <p className="text-center">Achivement #1</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Img variant="top" src={Achivements3} />
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
