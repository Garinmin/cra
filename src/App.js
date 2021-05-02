import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Header  />
          <Main />
          <Footer />
        </Container>
      );
      </>
    );
  }
}
export default App;
