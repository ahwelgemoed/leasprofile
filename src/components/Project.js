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
import Next from './Next';
import { log } from 'handlebars';

class Project extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      loading: true,
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.project !== this.props.project) {
      console.log(this.props.project);
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { project } = this.props;
    const { loading } = this.state;

    if (!loading) {
      return (
        <React.Fragment>
          <div className="home_header_banner">
            <Container>
              <Navbar light expand="md">
                <NavbarBrand
                  className="back"
                  onClick={() => this.props.history.push('/')}
                >
                  <i className="fas fa-long-arrow-alt-left" />
                  take a step back
                </NavbarBrand>
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
                    <h3>{project.Title}</h3>
                    <Col xs="12">
                      <div className="arbit" />
                    </Col>

                    <p>{project.Body}</p>
                  </div>
                </Col>
                <Col xs="6" className="Header_Body_Col">
                  <span>
                    {project.Technology.map((t, i) => (
                      <span key={i}>{t} </span>
                    ))}
                  </span>
                  <div className="people">
                    <h2>team members</h2>
                    {project.People.map((p, i) => (
                      <p key={i}> {p}</p>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div
            className="banner_Img"
            style={{
              backgroundImage: `url(${project.BannerImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '80vh'
            }}
          />

          <Row>
            {project.bodyImg.map((b, i) => {
              const total = project.bodyImg.length;
              const isTotalOdd = total % 2;
              if (isTotalOdd === 1 && total === i + 1) {
                return (
                  <Col xs="12">
                    <div
                      className="banner_Img"
                      style={{
                        backgroundImage: `url(${b})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '80vh'
                      }}
                    />
                  </Col>
                );
              } else {
                return (
                  <Col xs="6" className="col6_noPadding">
                    {' '}
                    <div
                      className="banner_Img"
                      style={{
                        backgroundImage: `url(${b})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '80vh'
                      }}
                    />
                  </Col>
                );
              }
            })}
          </Row>
          <Next chosen={project.id} />
        </React.Fragment>
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
