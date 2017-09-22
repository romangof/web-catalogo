import React, { Component } from 'react';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {id: '', title: '', description: '' }};
  }

  componentWillMount() {
    // fetch( 'https://cors-anywhere.herokuapp.com/' + `http://catalogo.enaex.com/api/catalogo/${this.props.id}`, { // comment this when pushing to heroku
    fetch( `/api/catalogo/${this.props.id}`, { // use this when pushing to heroku
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'TOKEN': 'J84w3iTJe62dbZdmSXVL',
        'API-KEY': '9f580ac488f3'
      }
    })
    .then((response) => response.json() )
    .then((response) => this.setState({data: response}) )
    .catch( e => { console.log(e); return e } )
  }

  render() {
    return <div className="well" style={{padding: "2% 5%", margin: "5%", border: "none"}}>
      <h1>{this.state.data.title}</h1>
      <hr/>
      <div dangerouslySetInnerHTML={{__html: this.state.data.description}} />
    </div>
  }
};

