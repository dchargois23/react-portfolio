import React from 'react';
import { Row, Col, Card, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import passwordGen from '../images/projects/Password Generator.png';
import streamOn from '../images/projects/StreamON.jpg';
import weatherDashboard from '../images/projects/Weather Dashboard.jpg';
import workdayPlanner from '../images/projects/Workday Planner.png';
import fitnessTracker from '../images/projects/Fitness Tracker.png';
import noteTaker from '../images/projects/Note Taker.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    return (
        <div className="projects">
            <Row className="projects-row-1">
                <Col sm="4" py="2">
                    <Card className="project">
                        <CardImg top width="50%" src={passwordGen} alt="Password Generator Screenshot" />
                        <Card body>
                            <CardTitle><a href="https://github.com/dchargois23/JavaScript-Exercise-Wk2-">Password Generator</a></CardTitle>
                            <CardSubtitle> Password Generator can generate a random alpha-numeric password 8-128
                            characters in length based on user preference.
                and other vital information.</CardSubtitle>
                            <Row className="stack">
                                <p><b>Stack:</b> JavaScript, React.js</p>
                            </Row>
                        </Card>
                    </Card>
                </Col>
                <Col sm="4" py="2">
                    <Card className="project">
                        <CardImg top width="50%" src={streamOn} alt="StreamON Screenshot" />
                        <Card body>
                            <CardTitle><a href="https://github.com/tuhituhi18/project1_movie">StreamON App</a></CardTitle>
                            <CardSubtitle>This project application is a search engine that will display available
                                streaming applications for a specific movie or series.</CardSubtitle>
                            <Row className="stack">
                                <p><b>Stack:</b> JavaScript</p>
                            </Row>
                        </Card>
                    </Card>
                </Col>
                <Col sm="4" py="2">
                    <Card className="project">
                        <CardImg top width="50%" src={weatherDashboard} alt="Weather Dashboard Screenshot" />
                        <Card body>
                            <CardTitle><a href="https://github.com/dchargois23/Weather-Dashboard-Exercise">Weather Dashboard</a></CardTitle>
                            <CardSubtitle>The weather dashboard allows the user to find current weather data for
                                a specific city. The website displays a five day forecast for the city as well.</CardSubtitle>
                            <Row className="stack">
                                <p><b>Stack:</b> JavaScript</p>
                            </Row>
                        </Card>
                    </Card>
                </Col>
            </Row>
            <Row className="projects-row-2">
                <Col sm="4" py="2">
                    <Card className="project">
                        <CardImg top width="50%" src={workdayPlanner} alt="Workday Planner Screenshot" />
                        <Card body>
                            <CardTitle><a href="hhttps://github.com/dchargois23/Work_Day_Planner">Workday Planner</a></CardTitle>
                            <CardSubtitle>This calendar is used to keep track of past, present,
                            and future work activities. The calendar enables a person to enter and save his/her data
                                entries.</CardSubtitle>
                            <Row className="stack">
                                <p><b>Stack:</b> JavaScript, React.js</p>
                            </Row>
                        </Card>
                    </Card>
                </Col>
                <Col sm="4" py="2">
                    <Card className="project">
                        <CardImg top width="50%" src={fitnessTracker} alt="Fitness Tracker Screenshot" />
                        <Card body>
                            <CardTitle><a href="https://github.com/dchargois23/Workout-Tracker">Fitness Tracker</a></CardTitle>
                            <CardSubtitle>A web-application used to track and store fitness workouts. </CardSubtitle>
                            <Row className="stack">
                                <p><b>Stack:</b>  JavaScript, Sequel</p>
                            </Row>
                        </Card>
                    </Card>
                </Col>
                <Col sm="4" py="2">
                    <Card className="project">
                        <CardImg top width="50%" src={noteTaker} alt="Note Taker Screenshot" />
                        <Card body>
                            <CardTitle><a href="https://github.com/dchargois23/Note-Taker">DayBooks</a></CardTitle>
                            <CardSubtitle>An application that can be used to write, save, and delete notes..</CardSubtitle>
                            <Row className="stack">
                                <p><b>Stack:</b>JavaScript</p>
                            </Row>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Projects