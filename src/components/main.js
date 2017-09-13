import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Description from './description';
import Features from './features';

export default ({ match }) => 
<div>
  {/* {match.params.id} */}
  {/* {console.log(match.params.id)} */}

  <Tabs id="uncontrolled-tab-example" mountOnEnter={true}>
    <Tab eventKey={1} title="Descripción de Equipo">
      <Description id={ match.params.id } />
    </Tab>
    <Tab eventKey={2} title="Información tecnica"><Features id={ match.params.id } /> </Tab>
    <Tab eventKey={3} title="Biblioteca técnica">Tab 3 content</Tab>
  </Tabs>
</div>