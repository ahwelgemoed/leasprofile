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
  Row,
  Container
} from 'reactstrap';
import './styles.scss';
import media from './media';
import styled from 'styled-components';

const Ieader = styled.div`
  background: ${props => props.theme.backgroundColor};
`;
const Marky = styled.mark`
  color: ${props => props.theme.highLight};
  background: ${props => props.theme.backgroundColor};
  padding: 0;
`;
const Bordery = styled.div`
  border-top: 3px ${props => props.theme.highLight} solid;
  width: 15%;
`;
const Borderys = styled.div`
  ${media.mamabear`
      a {
        color: ${props => props.theme.highLight} !important;
        padding-top: 20px
      }
   `}
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
  scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  render() {
    return (
      <Ieader className="home_header_banner">
        <Container>
          <Navbar light expand="md">
            <NavbarBrand href="#">Leandra de Sousa</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse className="kykNet" isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Borderys>
                    <NavLink href="#">Projects</NavLink>
                  </Borderys>
                </NavItem>
                <NavItem>
                  <Borderys>
                    <NavLink href="#">Resume</NavLink>
                  </Borderys>
                </NavItem>
                <NavItem>
                  <Borderys>
                    <NavLink href="#">Get in Touch</NavLink>
                  </Borderys>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Row>
            <Col xs="12" lg="6">
              <div className="Header_Body_Col">
                <h3 style={{ paddingBottom: '20px' }}>
                  Hi, I’m Lea, a <Marky>digital designer</Marky> with a strong
                  focus on <Marky>UI/UX.</Marky>
                </h3>
                <Bordery xs="12">{/* <Bordery className="arbit" /> */}</Bordery>
                <p className="wordsss">
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
