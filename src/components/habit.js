import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';

export default class Habit extends React.Component {
    state = {
        data: []
    }

componentDidMount() {
    fetch('http://18.224.27.43:3000/chains')
    .then(response => response.json())
    .then(data => this.setState({data}));
}
    render() {
        return (
            <CardDeck>{this.state.data.map(chain => 
                <Card key={chain.id}style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../logo512.png" />
                    <Card.Body>
                        <Card.Title>{chain.title}</Card.Title>
                            <Card.Text>
                            {chain.description}
                            </Card.Text>
                            <Button variant="outline-info">Check In For Today</Button>
                            <Button variant="outline-info">Edit Habit</Button>
                    </Card.Body>
                    <Card.Footer><small className="text-muted">Last updated: {chain.updatedAt}</small>
                    </Card.Footer>
                </Card>)}
            </CardDeck>
        )
    }
}