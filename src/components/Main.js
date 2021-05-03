import React from 'react';
import Item from './data.json';
import { Component } from 'react';
import { Container, Card, CardDeck } from 'react-bootstrap';
import ShowModal from './Modal.js';
import HornForm from './Form.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hornsArr: [],
    };
  }

  filterHorns = (value) => {
    if (value === 0) {
      this.setState({ hornsArr: [] });
    } else { 
      this.setState({ hornsArr: Item.filter(horns => horns.horns === value) })
    }
  }

  render() {
    
    if (this.state.hornsArr.length === 0) {
      return (
        <>
        <Container>
            <HornForm checkHorns={this.filterHorns} />
          </Container>
          <CardDeck>
            {Item.map(item => (
              <HornedBeasts
                title={item.title}
                imgUrl={item.image_url}
                description={item.description}
                horns={item.horns}
              />
            ))}
          </CardDeck>
        </> 
      );
    } else {
      return (
        <>
          <Container>
            <HornForm checkHorns={this.filterHorns} />
          </Container>
          <CardDeck>
            {this.state.hornsArr.map(item => (
              <HornedBeasts
                title={item.title}
                imgUrl={item.image_url}
                description={item.description} 
                horns={item.horns}
              />
            ))}
          </CardDeck>
        </>
      );
    }
  }
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
          style={{ minWidth: "18rem", display: "flex", justifyContent: "space-around", margin: "10px", padding: "10px" }}
        >
          <Card.Img 
            variant="top"
            src={this.props.imgUrl} 
          />
          <Card.Body>
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Text>
              <h4>horns = {this.props.horns}</h4>
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
