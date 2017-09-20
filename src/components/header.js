import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import alLogo from '../assets/AL-header.png';
import kannusLogo from '../assets/kannus-header.png';

const textColor = { color: 'white', fontSize: '30px' }
const logoStyle = { padding: '15px 10px 20px 10px', maxHeight: '70px' }

export default () => 
<Navbar>
  <Nav >
    <NavItem eventKey={1} href="#">
      <h1 style={textColor}>Catálogo de Mantenimiento por proximidad</h1>
    </NavItem>
  </Nav>
  <Nav pullRight>
    <Navbar.Brand>
      <a href="http://www.aceleracion.cl/">
        <img src={alLogo} style={logoStyle} alt="Aceleracion Labs"/>
      </a>
    </Navbar.Brand>
    <Navbar.Brand>
      <a href="http://www.kannus.cl/">
        <img src={kannusLogo} style={logoStyle} alt="Kannus"/>
      </a>
    </Navbar.Brand>
  </Nav>
</Navbar>