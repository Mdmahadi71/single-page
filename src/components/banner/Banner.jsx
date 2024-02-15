import React from 'react'
import './banner.css'
import { Container, Row,Col } from 'react-bootstrap'
import banner from '../../assets/bannerimg.png'
import { FaRegBell } from "react-icons/fa";

const Banner = () => {
  return (
    <>
    <Container>
        <Row>
            <Col lg={6}>
                <div className="bnrbtn">
                    <a href="#"> Startup Business</a>
                    <div className="ball">
                    <FaRegBell />
                    </div>
                </div>
                <div className="bannr_text">
                        <h3>Empowering startups to fuel
                           their business growth</h3>
                           <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                               velit
                            nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                    </div>
                    <div className="banrlast">
                        <a href="#">Get started now </a>
                    </div>
            </Col>
            <Col lg={6}>
                    <img src={banner} alt="" />
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Banner
