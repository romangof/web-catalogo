import React, { Component } from 'react';
import { Image, ResponsiveEmbed } from 'react-bootstrap';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{id: '', media_url: '', media_type: 1 }]};
  }

  componentWillMount() {
    // fetch( `https://cors-anywhere.herokuapp.com/http://catalogo.enaex.com/api/catalogo/${this.props.id}/multimedia`, { // comment this when pushing to heroku
    fetch( `/api/catalogo/${this.props.id}/multimedia`, { // use this when pushing to heroku
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
    function media(elem) {
      switch (elem.media_type) {
        case 1:
          return <Image key={elem.id} src={elem.media_url} responsive />
        case 2:
          return <video key={elem.id} src={elem.media_url} controls />
        default:
          break;
      }
    }

    return <div className="well" style={{padding: "2% 5%", margin: "5%"}}>
      {this.state.data.map( element =>
        <div key={element.id}>
          <ResponsiveEmbed a4by3>
            {media(element)}
            {/* <embed key={element.id} src={element.media_url} /> */}
          </ResponsiveEmbed>
          <br />
        </div>
      )}
    </div>
  }
};

