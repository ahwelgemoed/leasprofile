import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from 'react-content-loader';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';

class Project extends Component {
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
    const { project } = this.props;
    console.log(project);
    if (project) {
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
            <Row>
              <Col xs="6">
                <div className="Header_Body">
                  <h3>{project.Title}</h3>

                  <p>{project.Body}</p>
                </div>
              </Col>
              <Col xs="6">Hello</Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return <List />;
    }
  }
}
export default compose(
  firestoreConnect(props => [
    { collection: 'projects', storeAs: 'project', doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    project: ordered.project && ordered.project[0]
  }))
)(Project);
