import './App.css';
import React, { Component } from 'react';
import { Row, Nav, Tab } from 'react-bootstrap';
import SelecionarTipos from './screens/selecionarTipos/SelecionarTipos';
const URL_TO_FETCH = 'http://localhost:3001/';
class App extends Component {
  state = {
    ingredientes: {},
    lanches: [],
    loading: true,
  };

  componentDidMount() {
    fetch(URL_TO_FETCH)
      .then(response => {
        response.json().then(result => {
          this.setState({
            ingredientes: result.ingredientes,
            lanches: result.lanches,
            loading: false,
          });
        });
      })
      .catch(err => {
        console.error('Failed retrieving information', err);
      });
  }

  render() {
    const { lanches, ingredientes } = this.state;
    return (
      <div className="App">
        <Tab.Container id="tabs-proresso" defaultActiveKey="passo1">
          <Row className="justify-content-md-center">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="passo1">Selecionar Tipo</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="passo2">Escolher Ingredientes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="passo3">Concluir</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row className="justify-content-md-center">
            <Tab.Content>
              <Tab.Pane eventKey="passo1">
                <SelecionarTipos lanches={lanches} />
              </Tab.Pane>
              <Tab.Pane eventKey="passo2">2</Tab.Pane>
              <Tab.Pane eventKey="passo3">3</Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
