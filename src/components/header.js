import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import alLogo from '../assets/AL-header.png';
import kannusLogo from '../assets/kannus-header.png';

const textColor = { color: 'white' }
const logoStyle = { padding: '10px 10px 20px 10px', maxHeight: '60px' }

export default () => 
<Navbar>
  <Nav >
    <NavItem eventKey={1} href="#"><h4 style={textColor}>Catálogo de Mantenimiento por proximidad</h4></NavItem>
  </Nav>
  <Nav pullRight>
    <Navbar.Brand>
      <a href="#">
        <img src={alLogo} style={logoStyle} alt="Aceleracion Labs"/>
      </a>
    </Navbar.Brand>
    <Navbar.Brand>
      <a href="#">
        <img src={kannusLogo} style={logoStyle} alt="Kannus"/>
      </a>
    </Navbar.Brand>
  </Nav>
</Navbar>