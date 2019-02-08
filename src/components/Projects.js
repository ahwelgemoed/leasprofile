import React, { Component } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from 'react-content-loader';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';

class Projects extends Component {
  render() {
    console.log(this.props.auth);
    const { projects, auth, firebase } = this.props;
    return (
      <div>
        {auth.uid ? (
          <React.Fragment>
            <Link to="/upload/project/"> Upload</Link>
            <Button
              onClick={() => {
                firebase.logout();
              }}
            >
              {' '}
              Logout
            </Button>
          </React.Fragment>
        ) : null}
        <div class="card-columns">
          {projects ? (
            projects.map((project, i) => (
              <React.Fragment>
                <Link to={`/project/${project.id}`}>
                  <div className="card text-white">
                    <img className="myImg" src={project.BannerImg} />
                    <div class="overlay" style={{ background: '#faf0ea' }}>
                      <div class="text">
                        <h5 className="card-title">{project.Title}</h5>
                        <p className="card-text">{project.subTitle}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            ))
          ) : (
            <React.Fragment>
              <div className="card text-white">
                <List />
              </div>
              <div className="card text-white">
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
