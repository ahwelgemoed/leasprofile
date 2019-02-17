import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Container
} from 'reactstrap';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { styles } from 'ansi-colors';
import './styles.scss';

const Ieader = styled.div`
  background: ${props => props.theme.backColor};
`;

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
      <Ieader className="home_header_banner_Home">
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
          <Row>
            <Col xs="6">
              <div className="Header_Body_Col">
                <h3>
                  Hi, I’m Lea, a digital designer with a strong focus on UI/UX.
                </h3>
                <Col xs="12">
                  <div className="arbit" />
                </Col>
                <p>
                  I create unique and memorable experiences for people. I’m
                  driven by an interest in human behaviour & curiousity and a
                  lifelong desire to help others.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Ieader>
    );
  }
}
