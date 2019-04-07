import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import Contact from './Contact';
import Projects from './Projects';
import ScrollableAnchor from 'react-scrollable-anchor';
import './styles.scss';
export default class Homer extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Row>
            <Col>
              {/* <ScrollableAnchor id={'projects'}> */}
              <Projects />
              {/* </ScrollableAnchor> */}
            </Col>
          </Row>
        </Container>
        {/* <ScrollableAnchor id={'callMe'}> */}
        <Contact />
        {/* </ScrollableAnchor> */}
      </React.Fragment>
    );
  }
}
