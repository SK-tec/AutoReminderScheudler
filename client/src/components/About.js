import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import schoolbus from "../images/schoolbus.jpg";
import playground from "../images/playground.jpg";
import computer from "../images/computer.jpg";
import samatha from "../images/Samatha_1.PNG";
import tejasvi from "../images/Tejasvi.png";
import ershia from "../images/Ershia.jpg";

const About = () => {
  return (
    <>
      <h2
        id="about-heading"
        style={{ color: "navy" }}
        className="pt-5  text-center"
      >
        WELCOME TO KIDZEE
      </h2>
      <div className="mt-4 container text-justify about px-10 mb-5">
        <p>
          Kidzee's journey towards education excellence began in 2004 with an
          ideal mix of academic and corporate professionals who felt the shared
          need to provide inclusive education.Kidzee is one of the best CBSE
          Schools in India. At Kidzee, we challenge our students with a unique
          educational experience which emphasises a seamless blend of academics,
          sports, performing arts, community and experiential learning
          programmes. Kidzee is an institution which was envisaged to provide
          young students with a healthy environment to nurture themselves
          cognitively, intellectually, artistically and athletically; along with
          also imbibing our moral and cultural values, which will enable them to
          become responsible global citizens of tomorrow.
        </p>
        <p>
          Our core teaching methodologies focus on a colourful blend of
          traditional classroom learning combined with extensive sports
          facilities, wide range of extra-curricular activities, numerous social
          and cultural events and similar special occasions, which ensure a
          holistic approach to our students’ overall growth and progress.
        </p>
        <p>
          Our caring teachers devote themselves to our students and their needs
          every day; while also being their guardian, mentor and friend. At
          Kidzee, our curriculum is designed with the objective to
          constructively ignite our young students’ minds and positively
          navigate their vibrant energy towards building a better and brighter
          future for India and the World. We also firmly believe in creating an
          atmosphere for collaborative learning; wherein our students grow with
          experiences from the outside world - their surroundings, their
          families, their peers and through their deep bonds of friendship.
        </p>
      </div>

      <Container id="con-about">
        <Row className="row-about w-100">
          <Col className="col-img col-img-1" xs={1} md={4}></Col>
          <Col
            className="col-img col-img-2 d-flex align-items-center justify-content-center fw-bold"
            xs={1}
            md={4}
          >
            <span>100%</span> Satisfied parents
          </Col>
          <Col className="col-img col-img-3" xs={1} md={4}></Col>
        </Row>
        <Row className="row-about w-100">
          <Col
            className="col-img col-img-4 d-flex align-items-center justify-content-center fw-bold"
            xs={1}
            md={4}
          >
            Contempaorary Amenities
          </Col>
          <Col className="col-img col-img-5" xs={1} md={4}></Col>
          <Col
            className="col-img col-img-6 d-flex align-items-center justify-content-center fw-bold"
            xs={1}
            md={4}
          >
            Liberal arts <br></br>& sports tradition
          </Col>
        </Row>
        <Row className="row-about w-100">
          <Col className="col-img col-img-7" xs={1} md={4}></Col>
          <Col
            className="col-img col-img-8 d-flex align-items-center justify-content-center fw-bold"
            xs={1}
            md={4}
          >
            Hooked on learning
          </Col>
          <Col className="col-img col-img-9" xs={1} md={4}></Col>
        </Row>
        <Row className="row-about w-100">
          <Col
            className="col-img col-img-10 d-flex align-items-center justify-content-center fw-bold"
            xs={1}
            md={4}
          >
            The quest for excellence
          </Col>
          <Col className="col-img col-img-11" xs={1} md={4}></Col>
          <Col
            className="col-img col-img-12 d-flex align-items-center justify-content-center fw-bold"
            xs={1}
            md={4}
          >
            Door to door bus service
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 team justify-content-center">
        <h2 className="text-success text-center mb-2">Meet Our Seniors</h2>
        <div className="row justify-content-center ">
          <div className="col-lg-3">
            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
            <img
              src={samatha}
              className="bd-placeholder-img rounded-circle mt-3"
              width="180"
              height="160"
              alt=""
            />
            <h3 className="mt-2">Samatha</h3>
            <p>
              Principal<br></br>India
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src={ershia}
              className="bd-placeholder-img rounded-circle mt-3"
              width="180"
              height="160"
              alt=""
            />

            <h3 className="mt-2">Ershia</h3>
            <p>
              Head of Administration Department<br></br>Iran
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src={tejasvi}
              className="bd-placeholder-img rounded-circle mt-3 "
              width="180"
              height="160"
              alt=""
            />

            <h3 className="mt-2">Tejasvi</h3>
            <p>
              Supervisor <br></br>India
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
