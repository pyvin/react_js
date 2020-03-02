import React, {Component} from "react";
import Tab from 'react-bootstrap/Tab'
import {Col, Container, Nav, Row} from "react-bootstrap";

export default class About extends Component{
    render() {
        return(
            <Container className="mt-5">
                <Tab.Container id="left-tab-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item >
                                    <Nav.Link className="bg-danger text-white" eventKey="first">Disin</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Program</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">FAMEWORK</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">library</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-2">
                                <Tab.Pane eventKey="first">
                                    <p>1</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                    <p>2</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="third">
                                    <p>3</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="fourth">
                                    <p>4</p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="fifth">
                                    <p>5</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>


                {/*<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">*/}
                {/*    <Tab eventKey="home" title="Home">*/}
                {/*        kjhjhk*/}
                {/*    </Tab>*/}
                {/*    <Tab eventKey="profile" title="Profile">*/}
                {/*        2*/}
                {/*    </Tab>*/}
                {/*    <Tab eventKey="contact" title="Contact" disabled>*/}
                {/*        44*/}
                {/*    </Tab>*/}
                {/*</Tabs>*/}
            </Container>
        )
    }
}