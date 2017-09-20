import React from 'react';
import { Col, Nav, Navbar, NavItem } from 'react-bootstrap';
import alLogo from '../assets/AL-header.png';
import kannusLogo from '../assets/kannus-header.png';

const textColor = { color: 'white', fontSize: '30px' }
const logoStyle = { padding: '15px 0px 20px', maxHeight: '70px' }

export default () => 
<Navbar>
  <Col lg={8} md={6} xs={12}>
    <Nav>
      <NavItem eventKey={1} href="#">
        <h1 style={textColor}>Servicio de Mantenimiento por proximidad</h1>
      </NavItem>
    </Nav>
  </Col>
  <Col lg={2} md={3} xs={6}>
  {/* <Nav pullRight> */}
    <Navbar.Brand>
      <a href="http://www.aceleracion.cl/" style={{height: 'fit-content'}}>
        <img src={alLogo} style={logoStyle} alt="Aceleracion Labs"/>
      </a>
    </Navbar.Brand>
  </Col>
  <Col lg={2} md={3} xs={6}>
    <Navbar.Brand>
      <a href="http://www.kannus.cl/" style={{height: 'fit-content'}}>
        <img src={kannusLogo} style={logoStyle} alt="Kannus"/>
      </a>
    </Navbar.Brand>
  {/* </Nav> */}
  </Col>
</Navbar>