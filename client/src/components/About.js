import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pool from "../images/pool.png";
import playarea from "../images/playarea.png";
import basketball from "../images/basketball.png";
import samatha from "../images/Samatha.png";
import tejasvi from "../images/Tejasvi.JPG";
import ershia from "../images/Ershia.jpg";

const About = () => {
  return (
    <>
      <h2 style={{ color: "navy" }} className="mt-5 text-center">
        WELCOME TO KIDZEE
      </h2>
      <div className="mt-3 container text-justify about px-10 ">
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
      <Container className="mt-3 mb-4 text-justify grid px-10 ">
        <Row>
          <Col sm={4}>
            <img src={pool} alt="pool" />
          </Col>
          <Col sm={4}>
            <div>
              <h5 style={{ color: "navy" }} className=" text-center ">
                Contempaorary Amenities
              </h5>
            </div>
          </Col>
          <Col sm={4}>
            <img src={playarea} alt="playarea" />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h5 style={{ color: "navy" }} className=" text-center ">
              100% satisfied parents
            </h5>
          </Col>
          <Col sm={4}>
            <img src={basketball} alt="basketball" />
          </Col>
          <Col sm={4}>
            <h5 style={{ color: "navy" }} className=" text-center ">
              LIBERAL ARTS AND SPORTS TRADITION
            </h5>
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
            <h3>Samatha</h3>
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

            <h3>Ershia</h3>
            <p>
              Head of Administration Department<br></br>Iran
            </p>
          </div>
          <div className="col-lg-3">
            <img
              src={tejasvi}
              className="bd-placeholder-img rounded-circle mt-3"
              width="180"
              height="160"
              alt=""
            />

            <h3>Tejasvi</h3>
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
