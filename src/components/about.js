import React from 'react';
import { Row, Col } from 'reactstrap';


const About = () => {
    return (
        <div className="about-me">
            <Row className="background">
                <Col sm="3" className="background-title">
                    <h1>Background</h1>
                </Col>
                <Col className="background-info">
                    <ul>
                        <li><h5>I obtained my M.S. degree in athletic training from California
              University of Pennsylvania.</h5></li>
                        <li><h5>I previously worked as a <b>head athletic trainer</b> for a
              <b> professional ice hockey</b> team in the <b>ECHL.</b></h5></li>
                        <li><h5>As of February 2019, I am an alumn of Flatiron School's online
              <b> software engineering bootcamp.</b></h5></li>
                        <li><h5>In August 2019, I helped Flatiron School open up the San Francisco campus as a <b>software engineer coach</b>.</h5></li>
                    </ul>
                </Col>
            </Row>
            <Row className="interests">
                <Col sm="3" className="interests-title">
                    <h1>Interests</h1>
                </Col>
                <Col className="interests-info">
                    <ul>
                        <li><h5>I love animals - fur momma to two rambunctious cats.</h5></li>
                        <li><h5>Being outdoors, especially if it involves hiking
               and camping.</h5></li>
                        <li><h5>I enjoy traveling internationally, but I have a soft spot for
                        traveling my own country. My ultimate goal is visiting all 50 states by 30 -
               currently at 36.</h5></li>
                        <li><h5>My passion truly lies within helping others, no matter how big or
              small of an impact I make. </h5></li>
                        <li><h5>Ice hockey is my favorite sport to watch - <b>Let's go Pens!</b></h5></li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default About