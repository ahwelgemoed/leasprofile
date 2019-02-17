import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {} from 'react-content-loader';
import { firestoreConnect } from 'react-redux-firebase';

class Next extends Component {
  state = { nexty: null, prevy: null, loading: false };
  next = () => {
    const { projects, chosen } = this.props;
    // console.log(chosen);

    const mainLenght = projects.length;
    projects.map((project, i) => {
      if (project.id === chosen) {
        return this.setState({
          nexty: i + 1,
          prevy: i - 1,
          loading: true
        });
      }
    });

    // console.log(chosen);
    // console.log(projects.indexOf(chosen));
  };

  render() {
    const { projects } = this.props;
    const { loading, nexty, prevy } = this.state;

    return (
      <div>
        {projects && !loading ? this.next() : null}
        {loading ? (
          <div className="row centers py-2">
            {loading && projects[prevy] ? (
              <Link to={`/project/${projects[prevy].id}`}>
                <div className="col-6 prev">
                  <span>
                    <p>you missed one</p>
                    <h3>
                      {' '}
                      <i className="fas fa-chevron-left" />{' '}
                      {projects[prevy].Title}
                    </h3>
                  </span>
                </div>
              </Link>
            ) : (
              <Col xs="6" className="nextCard" />
            )}
            {loading && projects[nexty] ? (
              <div className="col-6 nexty">
                <span>
                  <p>next up</p>

                  <h3>
                    {projects[nexty].Title}{' '}
                    <i className="fas fa-chevron-right" />{' '}
                  </h3>
                </span>
              </div>
            ) : (
              <Col xs="6" className="nextCard" />
            )}
          </div>
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
