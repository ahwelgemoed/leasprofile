import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { List } from 'react-content-loader';
import { firestoreConnect } from 'react-redux-firebase';
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
const Backky = styled.div`
  color: ${props => props.theme.highLight};
  background: ${props => props.theme.backgroundColor};
  padding: 0;
`;
const Parrie = styled.p`
  border-right: 3px ${props => props.theme.highLight} solid;
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
          <Ieader className="home_header_banner">
            <Container>
              <Navbar light expand="md">
                <Backky
                  className="back"
                  onClick={() => this.props.history.push('/')}
                >
                  <i className="fas fa-long-arrow-alt-left" />
                  take a step back
                </Backky>
                <NavbarToggler onClick={this.toggle} />
                <Collapse className="kykNet" isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Borderys>
                        <NavLink href="/">Projects</NavLink>
                      </Borderys>
                    </NavItem>
                    <NavItem>
                      <Borderys>
                        <NavLink href="#">Resume</NavLink>
                      </Borderys>
                    </NavItem>
                    <NavItem>
                      <Borderys>
                        <NavLink href="/">Get in Touch</NavLink>
                      </Borderys>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <Row>
                <Col xs="12" md="6" lg="6">
                  <div className="Header_Body_Col">
                    <h3>{project.Title}</h3>
                    <Bordery xs="12">
                      {/* <Bordery className="arbit" /> */}
                    </Bordery>
                    <p>{project.Body}</p>
                  </div>
                </Col>
                <Col xs="12" lg="6" md="6" className="Header_Body_Col smally">
                  <span>
                    {project.Technology.map((t, i) => {
                      let totals = project.Technology.length - 1;
                      if (totals === i) {
                        return <span key={i}> {t} </span>;
                      } else {
                        return <span key={i}> / {t} </span>;
                      }
                    })}
                  </span>
                  {project.People.length ? (
                    <div className="people">
                      <h2>
                        <Marky>team members</Marky>
                      </h2>
                      {project.People.map((p, i) => (
                        <Parrie key={i}> {p}</Parrie>
                      ))}
                    </div>
                  ) : null}
                </Col>
              </Row>
            </Container>
          </Ieader>

          <div
            className="banner_Img"
            style={{
              backgroundImage: `url(${project.BannerImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              // height: '80vh'
            }}
          />

          <Row>
            {project.bodyImg.map((b, i) => {
              const total = project.bodyImg.length;
              const isTotalOdd = total % 2;
              if (isTotalOdd === 1 && total === i + 1) {
                return (
                  <Col key={i} xs="12">
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
                  <Col xs="12" lg="6" className="col6_noPadding">
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
          {/* <Next chosen={project.id} /> */}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Row>
            <Col xs="6">
              <div className="card text-white">
                <List />
              </div>
            </Col>{' '}
            <Col xs="6">
              <div className="card text-white">
                <List />
              </div>
            </Col>
            <Col xs="6">
              <div className="card text-white">
                <List />
              </div>
            </Col>
            <Col xs="6">
              <div className="card text-white">
                <List />
              </div>
            </Col>
          </Row>
        </React.Fragment>
      );
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
