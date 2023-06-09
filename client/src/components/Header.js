import Carousel from "react-bootstrap/Carousel";
import school from "../images/school.jpg";
import students from "../images/students.png";
import basketball from "../images/basketball.jpg";
import sport from "../images/Sports.jpg";
import sport2 from "../images/sport2.jpg";
import Achivements from "./Achivements";
import Notices from "./Notices";

const Header = () => {
  return (
    <>
      <Carousel id="carousel">
        <Carousel.Item>
          <img className="d-block w-100 " src={school} alt="First slide" />
          <Carousel.Caption>
            <h2 className="shadow-5" >A Tradition of Excellence</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={students} alt="Second slide" />

          <Carousel.Caption>
            <h2 className="shadow-5" >The future begins here</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sport} alt="Third slide" />

          <Carousel.Caption>
            <h2 className="shadow-5">One Team, One Mission.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sport2} alt="Third slide" />

          <Carousel.Caption>
            <h2 className="shadow-5">Taking your game to the next level</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Notices />
      <Achivements />
    </>
  );
};

export default Header;
