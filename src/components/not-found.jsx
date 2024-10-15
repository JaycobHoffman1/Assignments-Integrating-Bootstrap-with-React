import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import dinoImage from '../images/404dino.png';

function NotFound() {
    const backgroundStyles = {
        height: "100vh",
        background: "lightblue"
    };

    const rowStyles = {
        paddingTop: "50px"
    };

    return (
    <div style={backgroundStyles}>
        <Container>
            <Row style={rowStyles}>
                <Col>
                    <h1>404 - Not Found</h1>
                </Col>
                <Col>
                    <Image src={dinoImage} fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NavLink to='/'>Return to Home</NavLink>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default NotFound;