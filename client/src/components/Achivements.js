import {Container,Card, Row, } from 'react-bootstrap';
import Boy from '../images/boy.jpeg';
import Girl from '../images/girl.jpeg';


const Achivements = () => {
    return (
        <Container fluid id="achievements">
            <h1>Achievements</h1>
            <Row sm={2} lg={4} className='justify-content-center gap-5'>
            <Card style={{ width: '20rem' }}>
                <Card.Img  variant="top" src={Boy}  />
                    <Card.Body>
                        <p className='text-center'>Achivement #1</p>
                    </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={Girl} />
                    <Card.Body>
                        <p className='text-center'>Achivement #1</p>
                    </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={Boy} responsive />
                    <Card.Body>
                        <p className='text-center'>Achivement #1</p>
                    </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={Girl} />
                    <Card.Body>
                        <p className='text-center'>Achivement #1</p>
                    </Card.Body>
            </Card>
            </Row>
        </Container>
    );
}
 
export default Achivements;
