import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Description from './description';
import Features from './features';
import ActionLibrary from './action_library';

// { border:'2px solid #9C9B9B'}

export default ({ match }) => 
<div>
  <Tabs id="uncontrolled-tab-example" justified mountOnEnter={false}>
    <Tab eventKey={1} title="Descripción de Equipo" tabClassName="tab-style" >
      <Description id={ match.params.id } />
    </Tab>

    <Tab eventKey={2} title="Información técnica" tabClassName="tab-style">
      <Features id={ match.params.id } />
    </Tab>

    <Tab eventKey={3} title="Biblioteca técnica" tabClassName="tab-style">
      <ActionLibrary id={ match.params.id } />
    </Tab>
  </Tabs>
</div>