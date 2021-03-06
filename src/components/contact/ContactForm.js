import React from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = props => {
    return (
        <Container className="contact-form">
            <Form onSubmit={props.handleOnSubmit}>
                <Col>
                    <FormGroup>
                        <Label for="name" hidden>Name</Label>
                        <Input type="text"
                            name="name"
                            placeholder="Full Name"
                            onChange={props.handleOnChange}
                            value={props.nameValue} />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="email" hidden>Email</Label>
                        <Input type="email"
                            name="email"
                            placeholder="Email"
                            onChange={props.handleOnChange}
                            value={props.emailValue} />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="message" hidden>Message</Label>
                        <Input type="textarea"
                            name="message"
                            placeholder="Message"
                            onChange={props.handleOnChange}
                            value={props.messageValue} />
                    </FormGroup>
                </Col>
                <Button>Send</Button>
            </Form>
        </Container>
    )
}

export default ContactForm;