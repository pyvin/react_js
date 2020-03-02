import React, { Component } from 'react';
import {
	Button,
	FormControl,
	Navbar,
	Container,
	Nav,
	Form} from 'react-bootstrap';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

// import Container from "react-bootstrap/Container";

export default class Header extends Component {
	render() {
		return (
			<>
			<Navbar collapseOnSelect /*fixed="top"*/ expand="md" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">
						<img src={logo}
						height="30"
						width="30"
						className="d-inline-block align-top"
						alt="Logo"/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					<Navbar.Collapse id="responsive-navbar-nav" >
						<Nav className="mr-auto">
							<Nav.Link href="/"> Home </Nav.Link>
							<Nav.Link href="/about"> about </Nav.Link>
							<Nav.Link href="/contacts"> contacts </Nav.Link>
							<Nav.Link href="/blog"> blog </Nav.Link>
						</Nav>
						<Form inline >
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2" />
						</Form>
						<Button variant="outline-info">Seach</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Router>
				<Switch>
					<Route exact path = '/' component={Home} />
					<Route  path='/about' component={About}/>
					<Route  path = '/contacts' component={Contacts}/>
					<Route  path = '/blog' component={Blog}/>
				</Switch>
			</Router>
			</>
		)
	}
}