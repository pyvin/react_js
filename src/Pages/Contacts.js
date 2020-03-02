import React, {Component} from "react";
import {Button, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default class Contacts extends Component{
    render() {
        return(
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Contact as</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>

                        <Form.Text>We are never hare text</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Exaple text</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckBox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}