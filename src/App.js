import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated } from './helpers';
import AddProject from './components/AddProject';
import Footer from './components/Footer';
import Homer from './components/Homer';
import Project from './components/Project';
import Login from './components/auth/Login';
// Redux //
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';

const defaults = {
  backgroundColor: '#FAF0EA',
  highLight: '#FB5615'
};
const blue = {
  backgroundColor: '#EAF6FA',
  highLight: '#2E00BE'
};
const green = {
  backgroundColor: '#E8F7E9',
  highLight: '#2E00BE'
};
const yellow = {
  backgroundColor: '#FFFAE5',
  highLight: '#A43D11'
};
const red = {
  backgroundColor: '#FFEFEF',
  highLight: '#F20825'
};
const themes = [red, blue, yellow, green, defaults];
// Randomizes the Themes on load
const rand = themes[Math.floor(Math.random() * themes.length)];

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={rand}>
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
