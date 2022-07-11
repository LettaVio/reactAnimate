import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Body() {
    return (
      <>
      <main>
        <Container className="page-features"
          xyz="fade flip-down stagger duration-10 delay-2 ease-out-back" >
      <Row>
        <Col xs={12} sm={6} md={4} className="mt-2" >
          <div className="feature-item xyz-nested ">
            <h2>Hard Skills </h2>
            <ul>
                <li>HTML5/SCSS</li>
                <li>JS/JQuery/Bootsrap/React </li>
                <li>base Python, SQL, PHP</li>
                <li>Gulp, Git</li>
                <li>PS, Figma, Canva</li>
            </ul>
            </div>
        </Col>
      
        <Col xs={12} md={4} className="mt-2">
          <div className = "feature-item xyz-nested " >
            <h2>Experience</h2>
            <ul>
                <li>Computer science teacher (Web, Python, Arduino) (2018-present)</li>
                <li>Head of computer science laboratories KPNU(2016-2021)</li>
                <li>Assistant department of Computer science (2013-2021)</li>
                <li>Front-end developer (2012-2013)</li>
              </ul>
            </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="mt-2">
          <div className = "feature-item xyz-nested ">
                <h2>Soft skills</h2>
                <ul>
                    <li>teamwork </li>
                    <li>increased sense of responsibility </li>
                    <li>willingness to learn </li>
                    <li>continuous self-improvement</li>
                </ul>
          </div>
        </Col>
      </Row>
      </Container>

   

        <Container
            className="page-section"
            xyz="fade small stagger delay-4 ease-in-out"
    >
          <Row>          
            <Col  xs={12} md={7}>
            <div className="section-left" xyz="fade left stagger">
                <h2>Certifications</h2>
                <div className="section-item xyz-nested">
                Front-End Web UI Frameworks and Tools: Bootstrap 4 The Hong Kong University of Science and Technology
                </div>
                <div className="section-item xyz-nested">
                    <p>Certificate of completing the "Fundamentals of Software Testing" course from QATestLab</p>
                </div>
                <div className="section-item xyz-nested">
                    Courses on Udemy's Platform
                </div>
                </div>
            </Col>
            <Col xs={12} md={5} >
            <div className="section-right xyz-nested" xyz="fade big delay-10">
                    <h2>Languages</h2>
                    <ul>
                        <li>Ukrainian/Russian - fluent</li>
                        <li>English - Upper-Intermediate</li>
                        <li>Deutsch – Elementary</li>
                        
                    </ul>
                </div>
            </Col>
          </Row>

      </Container>
            
    </main>
      </>
    );
  }
  