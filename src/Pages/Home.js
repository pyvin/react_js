import React, {Component} from "react";
import CarouselBox from '../Components/CarouselBox'
import {Container, CardDeck, Card, Button} from 'react-bootstrap'
// import Card from "react-bootstrap/Card";

export default class Home extends Component{
    render() {
        return(
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck>
                        <Card border="primary" text="primary">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>LOREM</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>

                            <Card.Body>
                                <Card.Title>Developers </Card.Title>
                                <Card.Text>LOREM</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img
                                variant="bottom"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Developer 3</Card.Title>
                                <Card.Text>LOREM</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        //    Photo by Fox from Pexels
        )
    }
}