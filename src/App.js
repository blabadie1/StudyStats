import React, { useState , useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import _ from 'lodash';
import CurrClasses from './Components/CurrClasses/CurrClasses.js';
import Graph from './Components/Graph/Graph.js';
import Recommendation from './Components/Recommendation/Recommendation.js';

const Nav = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Study Stats</Navbar.Brand>
  </Navbar>
);

function App() {
  const [classes, setClasses] = useState([{id: "", title: "", assignments: []}])
  const url = '/data/assignments.json';

  useEffect(() => {
    const fetchClasses= async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setClasses(json.courses);
    }
    fetchClasses();
  }, [])
  console.log(classes);

  return (
    <React.Fragment>
      <Nav/>
      <Container>
        <Row>
          <CurrClasses key={classes.title} state={{classes, setClasses}}/>
          <Graph key={classes.title} state={{classes, setClasses}}/>
        </Row>
        <Row>
          <Recommendation state={{classes, setClasses}}/>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
