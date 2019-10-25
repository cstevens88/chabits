import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Navigation extends React.Component {
    state = {
        data: []
    }

componentDidMount() {
    fetch('http://18.224.27.43:3000/users/4')
    .then(response => response.json())
    .then(data => this.setState({data}));
}
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img alt="chabits" src="../favicon16.ico"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">{this.state.data.map(user =><div key={user.id}>{user.username}</div>)}</Nav.Link>
                    <Nav.Link href="#logout">logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}