import React, { Component } from 'react';
import { Form, FormGroup, Col, Checkbox, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Tasks extends Component {
  constructor() {
    super();
    this.state = { q1:false, q2:false, q3:false, q4:false };
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  handleChange(e) {
    var value = !this.state[e.target.name];
    this.setState({ [e.target.name]: value});
  }

  getValidationState() {
    var flag = false
    Object.keys(this.state).map( item => {
        // console.log(item, this.state[item])
        if (!this.state[item]) flag = true
      }
    )
    // console.log(flag);
    return flag;
  }


  render() {
    return (
      <div className="" style={{padding: "2% 5%", margin: "5%"}}>
        <Form horizontal>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox name="q1" checked={this.state.q1} onChange={this.handleChange}>Pregunta 1</Checkbox>
              <Checkbox name="q2" checked={this.state.q2} onChange={this.handleChange}>Pregunta 2</Checkbox>
              <Checkbox name="q3" checked={this.state.q3} onChange={this.handleChange}>Pregunta 3</Checkbox>
              <Checkbox name="q4" checked={this.state.q4} onChange={this.handleChange}>Pregunta 4</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={6}>
              <Link to={`/description/${this.props.match.params.id}`}>
                <Button block disabled={this.getValidationState()} >
                  Next
                </Button>
              </Link>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
};
