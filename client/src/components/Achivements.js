import {Card, Row, } from 'react-bootstrap';
import Boy from '../images/boy.jpeg';
import Girl from '../images/girl.jpeg';


const Achivements = () => {
    return (
        <div id="achievements">
            <h1>Achievements</h1>
            <Row sm={1} md={2} lg={4} className='justify-content-center gap-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-fluid' variant="top" src={Boy} />
                    <Card.Body>
                        <p className='text-center'>Achivement #1</p>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Girl} />
                    <Card.Body>
                        <p className='text-center'>Achivement #1</p>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Boy} />
                    <Card.Body>
                        <p className='text-center'>Achivement #1</p>
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Girl} />
                    <Card.Body>
                        <p className='text-center'>Achivement #1</p>
                    </Card.Body>
            </Card>
            </Row>
        </div>
    );
}
 
export default Achivements;