import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default () => <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">Logo | Catálogo de Mantenimiento</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">Link</NavItem>
    <NavItem eventKey={2} href="#">Link</NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>