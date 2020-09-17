import React from 'react';
import Main from './containers/Main'
import ScoreBoard from './containers/ScoreBoard'
import {Container, Row} from 'react-bootstrap'
// import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Main />
      </Row>
      <Row>
        <ScoreBoard />
      </Row>
    </Container>
  );
}

export default App;
