import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import Projects from './Projects';
import './styles.scss';
export default class Homer extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Row>
            <Col>
              <Projects />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
