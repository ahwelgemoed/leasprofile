import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Container
} from 'reactstrap';
import { styles } from 'ansi-colors';
import './styles.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="home_header_banner">
        <Container>
          <Navbar light expand="md">
            <NavbarBrand href="/">Leandra de Sousa</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse className="kykNet" isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Get in Touch
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="Header_Body">
            <h3>
              Hi, I’m Lea, a digital designer with a strong focus on UI/UX.
            </h3>

            <p>
              I create unique and memorable experiences for people. I’m driven
              by an interest in human behaviour & curiousity and a lifelong
              desire to help others.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
