import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import mainImg from '../images/projects/Profile.jpg';


const Home = () => {
    return (
        <div className="home">
            <Row className="intro">
                <Col className="intro-info">
                    <h1>Hello <Link to="/about" className="wave"><span role="img" aria-labelledby="wave">👋🏼</span></Link> I am Derrick.</h1>

                    <Row className="social-links">
                        <a href="https://github.com/dchargois23" target="_blank" rel="noopener noreferrer">

                        </a>

                        <a href="https://www.linkedin.com/in/derrick-chargois-5697345a/" target="_blank" rel="noopener noreferrer">

                        </a>
                    </Row>

                    <h5>Self-motivated professional with 15+ years management experience.</h5>
                </Col>
                <Col className="main-img">
                    <img className="main-img" src={mainImg} alt="Victoria" />
                </Col>
            </Row>
        </div>
    )
}

export default Home