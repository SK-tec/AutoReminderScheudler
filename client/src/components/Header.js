import Carousel from "react-bootstrap/Carousel";
import school from "../images/school.jpg";
import students from "../images/students.png";
import basketball from "../images/basketball.jpg";
import Achivements from "./Achivements";
import Notices from "./Notices";

const Header = () => {
  return (
    <>
      <Carousel id="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={school} alt="First slide" />
          <Carousel.Caption>
            <h3>21 Years of Excellence</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={students} alt="Second slide" />

          <Carousel.Caption>
            <h3>The future begins here</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={basketball} alt="Third slide" />

          <Carousel.Caption>
            <h3>Taking your game to the next level</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Notices />
      <Achivements />
    </>
  );
};

export default Header;
