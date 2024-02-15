import React from 'react'
import './immed.css'
import { Container, Row,Col } from 'react-bootstrap'
import { FaBaseballBall } from "react-icons/fa";

const Immed = () => {
  return (
   <Container>
    <Row>
      <Col lg={4}>
        <div className="boxiner">
              <h3>Immediate Deployment</h3>
              <p>Et vero eos et accusamus et 
                  iusto odio dignissimos</p>
                  <div className="ab_icon">
                  <FaBaseballBall  />
                  </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="boxiner">
              <h3>Immediate Deployment</h3>
              <p>Et vero eos et accusamus et 
                  iusto odio dignissimos</p>
                  <div className="ab_icon">
                  <FaBaseballBall  />
                  </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="boxiner">
              <h3>Immediate Deployment</h3>
              <p>Et vero eos et accusamus et 
                  iusto odio dignissimos</p>
                  <div className="ab_icon">
                  <FaBaseballBall  />
                  </div>
        </div>
      </Col>
    </Row>
   </Container>
   
  )
}

export default Immed
