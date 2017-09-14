import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {id: '', title: '', data_rows: [] }};
  }

  componentWillMount() {
    fetch( 'https://cors-anywhere.herokuapp.com/' + `http://catalogo.enaex.com/api/catalogo/${this.props.id}/caracteristicas`, { // comment this when pushing to heroku
    // fetch( 'https://cors-anywhere.herokuapp.com/' + `https://app-catalogo-web.herokuapp.com/api/catalogo/${this.props.id}/caracteristicas`, { // comment this when pushing to heroku
    // fetch( `/api/catalogo/${this.props.id}/caracteristicas`, { // use this when pushing to heroku
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'TOKEN': 'J84w3iTJe62dbZdmSXVL',
        'API-KEY': '9f580ac488f3'
      }
    })
    .then((response) =>  response.json() )
    .then((response) => { this.setState({data: response[0]}) })
    .catch(e => { console.log(e); return e })
  }

  render() {
    return <div className="well" style={{padding: "2% 5%", margin: "5%"}}>
      <h1>{this.state.data.title}</h1>
      <br />

      {this.state.data.data_rows.map( element => 
        <Row key={element.id}>
          <Col xs={6}>{element.column_1}</Col>
          <Col xs={6}>{element.column_2}</Col>
          <hr/>
        </Row>
      )}
    </div>
  }
};

