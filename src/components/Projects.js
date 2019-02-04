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
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';

class Projects extends Component {
  render() {
    console.log(this.props.projects);
    const { projects } = this.props;
    return (
      <div>
        {projects
          ? projects.map((project, i) => (
              <React.Fragment>
                <div className="card bg-dark text-white">
                  <img className="card-img" src={project.BannerImg} />
                  <div className="card-img-overlay">
                    <h5 className="card-title">{project.Title}</h5>
                    <p className="card-text">{project.subTitle}</p>
                  </div>
                </div>
              </React.Fragment>
            ))
          : null}
      </div>
    );
  }
}
export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect((state, props) => ({
    projects: state.firestore.ordered.projects
  }))
)(Projects);
