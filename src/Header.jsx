import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
      <header
        className="page-hero"
        xyz="fade small stagger ease-out-back duration-30"
      >
        <Container className="container">
          <Row >
            <Col xs = {12}>
            <div className="hero-logo xyz-nested">
                <div className="imgLogo"></div>
            </div>
            <h1>Violetta Hryshchuk</h1>
        <p className="hero-text xyz-nested">
         Hello! 
         If you are reading this text, I'll do all right with my code.
         So let me know how are you? 
        </p>
            </Col>
          </Row>
        </Container>
       
      </header>
    );
} 