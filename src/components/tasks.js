import React, { Component } from 'react';
import { Form, FormGroup, Col, Checkbox, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// export default ({ match }) => <Form horizontal>
//   <FormGroup>
//     <Col smOffset={2} sm={10}>
//       <Checkbox>Pregunta 1</Checkbox>
//       <Checkbox>Pregunta 2</Checkbox>
//       <Checkbox>Pregunta 3</Checkbox>
//       <Checkbox>Pregunta 4</Checkbox>
//     </Col>
//   </FormGroup>
//   <FormGroup>
//     <Col smOffset={3} sm={6}>
//       <Link to={`/description/${match.params.id}`}>
//         <Button block disabled={true} >
//           Next
//         </Button>
//       </Link>
//     </Col>
//   </FormGroup>
// </Form>

export default class Tasks extends Component {
  // getInitialState() {
  //   return {
  //     value: ''
  //   };
  // }
  constructor() {
    super();
    this.state = { data: {} };
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   var data = this.state.data;
  //   data[e.target.name] = e.target.value;
  //   this.setState({data: data});
  // }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  // }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Pregunta 1</Checkbox>
            <Checkbox>Pregunta 2</Checkbox>
            <Checkbox>Pregunta 3</Checkbox>
            <Checkbox>Pregunta 4</Checkbox>
          </Col>
        </FormGroup>
        {/* {console.log(this.props)} */}
        <FormGroup>
          <Col smOffset={3} sm={6}>
            <Link to={`/description/${this.props.match.params.id}`}>
              <Button block disabled={false} >
                Next
              </Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
    )
  }
};
