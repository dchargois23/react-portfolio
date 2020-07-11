import React from 'react';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return (
        <div className="about-me">
            <Row className="background">
                <Col sm="3" className="background-title">
                    <h1>Background</h1>
                </Col>
                <Col className="background-info">
                    <ul>
                        <li><h5>I was born in Lafayette, Louisiana. I am the youngest of
                        eight siblings. I enjoy
                        watching
                        and
                            playing sports.</h5></li>
                        <li><h5>I am a father of two beautiful daughters, Isabella and Victoria. I am outdoorsman
                        who
                        loves
                        fishing
                            and hunting. </h5></li>
                        <li><h5>I am
                        Veteran of the United States Marine Corps. While serving in the
                        Marines, I am was exposed to many memorable experiences. The lessons learned
                        will
                            never be forgotten.</h5></li>
                        <li><h5>I worked in the oil & gas industry for almost 19 years. The
                        company that employed me for 19 years, "Schlumberger" enabled me to travel the
                        world
                            and experience new heights.</h5></li>
                    </ul>
                </Col>
            </Row>
            <Row className="interests">
                <Col sm="3" className="interests-title">
                    <h1>Interests</h1>
                </Col>
                <Col className="interests-info">
                    <ul>
                        <li><h5>I love playing sports such as basketball and flag football. I have
                        developed a
                        new
                            hobby over the past few months.</h5></li>
                        <li><h5>I now enjoy bike riding with my daughters everyday.</h5></li>

                        <li><h5>My favorite sports team is the New Orleans Saints. - <b>WHO DAT!!</b></h5></li>
                    </ul>
                </Col>
            </Row>
        </div >
    )
}

export default About