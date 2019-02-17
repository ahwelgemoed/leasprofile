import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Footer from './components/Footer';
import Homer from './components/Homer';
import Project from './components/Project';
import Login from './components/auth/Login';
// Redux //
import { Provider } from 'react-redux';
import store from './store';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  backColor: '#EAF6FA'
};

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <React.Fragment>
              <Switch>
                <Route exact path="/" component={Homer} />
                <Route exact path="/leaslogin" component={Login} />
                <Route path="/project/:id" exact component={Project} />
                <Route
                  path="/upload/project/"
                  exact
                  component={UserIsAuthenticated(AddProject)}
                />
              </Switch>
              <Footer />
            </React.Fragment>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
