import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Contact from './Contact';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from 'react-content-loader';
import { firestoreConnect } from 'react-redux-firebase';
import styled from 'styled-components';

const OverSlay = styled.div`
  background: ${props => props.theme.backgroundColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
`;
const Fontsyt = styled.div`
  color: ${props => props.theme.highLight};
`;

class Projects extends Component {
  state = { loading: true, uniqButton: null };
  uniq = a => {
    let arry = [];
    a.map((project, i) => project.Technology.map((t, i) => arry.push(t)));
    // arry.push(project.Technology)
    let uniq = [...new Set(arry)];
    this.setState({
      uniqButton: uniq,
      loading: false
    });
  };
  // filter = tech => {
  //   const { projects } = this.props;
  //   // const result = projects.filter(project => project.Technology == tech);
  //   let arry = [];
  //   const result = projects.map(p => arry.push([p]));
  // };

  render() {
    const { projects, auth, firebase } = this.props;
    const { loading } = this.state;

    return (
      <div>
        {projects && loading ? this.uniq(projects) : null}
        {/* {uniqButton
          ? uniqButton.map(button => (
              <li key={button} onClick={this.filter.bind(this, button)}>
                {button}
              </li>
            ))
          : null} */}
        <div className="sticky-top">
          {auth.uid ? (
            <React.Fragment>
              <ButtonGroup>
                <Link className="btn btn-info" to="/upload/project/">
                  {' '}
                  Upload
                </Link>
                <Button
                  onClick={() => {
                    firebase.logout();
                  }}
                >
                  {' '}
                  Logout
                </Button>
              </ButtonGroup>
            </React.Fragment>
          ) : null}
        </div>
        <div className="card-columns">
          {projects ? (
            projects.map((project, i) => (
              <React.Fragment key={i}>
                <Link to={`/project/${project.id}`}>
                  <div className="card text-white">
                    <img
                      className="myImg"
                      src={project.BannerImg}
                      alt={'BannerImg'}
                    />
                    <OverSlay className="overlay">
                      <Fontsyt className="text">
                        <h5 className="card-title">{project.Title}</h5>
                        <p className="card-text">{project.subTitle}</p>
                      </Fontsyt>
                    </OverSlay>
                  </div>
                </Link>
              </React.Fragment>
            ))
          ) : (
            <React.Fragment>
              <div className="card ">
                <List />
              </div>
              <div className="card">
                <List />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect((state, props) => ({
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }))
)(Projects);
