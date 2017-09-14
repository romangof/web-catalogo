import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{id: '', media_url: '' }]};
  }

  componentWillMount() {
    // fetch( 'https://cors-anywhere.herokuapp.com/' + `http://catalogo.enaex.com/api/catalogo/${this.props.id}/multimedia`, { // comment this when pushing to heroku
    fetch( `/api/catalogo/${this.props.id}/multimedia`, { // use this when pushing to heroku
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'TOKEN': 'J84w3iTJe62dbZdmSXVL',
        'API-KEY': '9f580ac488f3'
      }
    })
    .then((response) => { return response.json() })
    .then((response) => {
      console.log("••••••");
      console.log(response);
      this.setState({data: response})
      // response && console.log(response.error)
    })
    .catch(e => { console.log(e); return e })
  }

  render() {
    // console.log("++++++");
    // console.log(this.state);
    // console.log(this.props);
    // console.log(this.state.data.title);
    return <div className="well" style={{padding: "2% 5%", margin: "5%"}}>
      {this.state.data.map( element =>
        <div style={{textAlign: 'center'}} >
          <Image key={element.id} src={element.media_url} style={{margin: '0 auto'}} responsive />
          <br />
        </div>
      )}
    </div>
  }
};

