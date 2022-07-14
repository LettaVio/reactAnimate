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
        Hi! 
         If you read this text, you'll search for someone who can complete your team.
         So let me know what do you think about me?<br/> By the way, you could read my CV and I'm waiting for your message.  
        </p>
            </Col>
          </Row>
        </Container>
       
      </header>
    );
} 