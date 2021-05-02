import React from 'react';
import Item from './data.json';
import { Component } from 'react';
import { Container, CardColumns, Card } from 'react-bootstrap';
import ShowModal from './Modal.js';

function Main() {

  return (
    
    <Container fluid>
      <CardColumns>
        {Item.map(item => (
          <HornedBeasts
            title={item.title}
            description={item.description}
            imgUrl={item.image_url}
          />
        ))}
      </CardColumns>
    </Container>
  );
}

class HornedBeasts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      showModal: false
    }
  }

  addFavorite = () => {
    this.setState({
      likes: this.state.likes + 1,
      showModal: true
     });
  }

  handleClose = () => {
    this.setState({showModal: false});
  }

  render() {

    return (
      <>
        <Card
          bg="dark"
          text="light"
          onClick={this.addFavorite}
        >
          <Card.Img 
            variant="top"
            src={this.props.imgUrl} 
            
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              😍 = {this.state.likes}
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>  
        </Card>

        <ShowModal 
        show={this.state.showModal} 
        onClose={this.handleClose}
        imgUrl={this.props.imgUrl}
        description={this.props.description}
        />
      </>
    );
  }
}

export default Main;
