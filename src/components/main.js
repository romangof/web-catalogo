import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Description from './description';
import Features from './features';
import ActionLibrary from './action_library';

export default ({ match }) => 
<div>
  <Tabs id="uncontrolled-tab-example" mountOnEnter={true}>
    <Tab eventKey={1} title="Descripción de Equipo">
      <Description id={ match.params.id } />
    </Tab>

    <Tab eventKey={2} title="Información técnica">
      <Features id={ match.params.id } />
    </Tab>

    <Tab eventKey={3} title="Biblioteca técnica">
      <ActionLibrary id={ match.params.id } />
    </Tab>
  </Tabs>
</div>