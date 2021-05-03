import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';


export default class HornForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
      }
      filter = (e) => this.props.checkHorns(parseInt(e.target.value));
      
      render() {
        return (
          
          <Form.Group>
              <Form.Label>Select horns</Form.Label>
            <Form.Control as="select" size="lg" onChange={this.filter}>
              <option value='0'>All Beasts</option>
              <option value='1'>1 Horn</option>
              <option value='2'>2 Horns</option>
              <option value='3'>3 Horns</option>
              <option value='100'>More</option>
            </Form.Control>
          </Form.Group>
        );
    }
}
  