import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Homer from './components/Homer';
import Project from './components/Project';
// Redux //
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Homer} />
              <Route path="/project/:id" exact component={Project} />
              <Route path="/upload/project/" exact component={AddProject} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
