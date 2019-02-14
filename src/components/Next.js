import React, { Component } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from 'react-content-loader';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
var nexty = null;

class Next extends Component {
  state = { nexty: null, prevy: null, loading: false };
  next = (id, i) => {
    const { projects, chosen } = this.props;
    if (projects) {
      const mainLenght = projects.length;
      projects.map((project, i) => {
        if (project.id === chosen) {
          if (i <= mainLenght) {
            return this.setState({
              nexty: i + 1,
              prevy: i - 1,
              loading: true
            });
          }
        }
      });
    }
    // console.log(chosen);
    // console.log(projects.indexOf(chosen));
  };

  render() {
    const { projects, chosen } = this.props;
    const { loading, nexty, prevy } = this.state;
    console.log(this.state);

    return (
      <div>
        {projects && !loading ? this.next() : null}
        {loading ? (
          <Row>
            <Col xs="6">
              {loading && projects[prevy] ? projects[prevy].id : null}
            </Col>
            <Col xs="6">
              {loading && projects[nexty] ? projects[nexty].id : null}
            </Col>
          </Row>
        ) : null}
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
)(Next);
