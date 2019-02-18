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
  border-top: 2.5px ${props => props.theme.highLight} solid;
  width: 20%;
`;

export default class Contact extends Component {
  render() {
    return (
      <Ieader className="home_header_banner_Home">
        <Container>
          <Row>
            <Col xs="6">
              <div className="Header_Body_Col">
                <h3 style={{ paddingBottom: '20px' }}>
                  Let’s create something great together.
                </h3>
                <Bordery xs="12">{/* <Bordery className="arbit" /> */}</Bordery>
                <p>
                  I’m always on the lookout for a new adventure. Let’s get in
                  touch - drop me a mail, give me call or just say hi.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Ieader>
    );
  }
}