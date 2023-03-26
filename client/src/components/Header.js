import Carousel from 'react-bootstrap/Carousel';
import school from "../images/school.jpg";
import students from "../images/students.png";
import basketball from "../images/basketball.jpg";

const Header = () => {
    return ( 
    <>
    <Carousel id="carousal">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={school}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>21 Years of Excellence</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={students}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={basketball}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    </> 
    );
}
 
export default Header;