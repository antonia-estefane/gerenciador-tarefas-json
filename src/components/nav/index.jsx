import React from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

const MyNavbar = () => {
    return(
        <div>
            <Navbar expand="lg" light bg="light">
            <Navbar.Brand href="#">
              Navbar
            </Navbar.Brand>
            <Navbar.Toggler target="#navbarSupportedContent" />
            <Collapse navbar id="navbarSupportedContent">
              <Navbar.Nav mr="auto">
                  <Nav.Link href="/">Tarefas</Nav.Link>
              </Navbar.Nav>
            </Collapse>
          </Navbar>
        </div>
    )
}

export default MyNavbar