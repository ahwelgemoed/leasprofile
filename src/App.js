import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header'
// Redux //
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <Container>
              <Row>
                <Col>.col</Col>
              </Row>
            </Container>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
