import React, { Component } from 'react';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {id: '', title: '', description: '' }};
  }

  componentWillMount() {
    // fetch( `http://catalogo.enaex.com/api/catalogo/${this.props.id}/caracteristicas`, { // comment this when pushing to heroku
    // // fetch( 'https://cors-anywhere.herokuapp.com/' + `https://app-catalogo-web.herokuapp.com/api/catalogo/${this.props.id}/caracteristicas`, { // comment this when pushing to heroku
    // // fetch( `/api/catalogo/${this.props.id}/caracteristicas`, { // use this when pushing to heroku
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'TOKEN': 'J84w3iTJe62dbZdmSXVL',
    //     'API-KEY': '9f580ac488f3'
    //   }
    // })
    // .then((response) => { return response.json() })
    // .then((response) => {
    //   // console.log("••••••");
    //   // console.log(response);
    //   this.setState({data: response})
    //   // response && console.log(response.error)
    // })
    // .catch(e => { console.log(e); return e })
  }

  render() {
    // console.log("++++++");
    // console.log(this.state);
    // console.log(this.props);
    // console.log(this.state.data.title);
    // console.log(this.state.data.description);
    // console.log(this.props);
    // console.log(this.props.id);
    return <div>
      asd
      {/* <h1>{this.state.data.title}</h1>
      <div dangerouslySetInnerHTML={{__html: this.state.data.description}} /> */}
    </div>
  }
};

