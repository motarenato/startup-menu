import './App.css';
import React, { Component } from 'react';
import { Col, Row, Button, Tab } from 'react-bootstrap';
import SelecionarTipos from './containers/selecionarTipos/SelecionarTipos';
import AddIngredientes from './containers/addIngredientes/AddIngredientes';
const URL_TO_FETCH = 'http://localhost:3001/';

class App extends Component {
  state = {
    ingredientes: {},
    lanches: [],
    lancheSelecionado: '',
    loading: true,
    selectedKey: 1,
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

  handleSelectKey = value => this.setState({ selectedKey: value });

  render() {
    const {
      lanches,
      ingredientes,
      selectedKey,
      lancheSelecionado,
    } = this.state;
    return (
      <div className="App">
        <div class="header">
          <div className="header-desc">
            <strong>Dextra lanches</strong>
          </div>
        </div>
        <Col md={{ offset: 3, span: 6 }}>
          <Tab.Container id="tabs-proresso" activeKey={selectedKey}>
            <Row>
              <Tab.Content style={{ width: '100%' }}>
                <Tab.Pane eventKey={1}>
                  <SelecionarTipos
                    lanches={lanches}
                    handleSelectKey={this.handleSelectKey}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey={2}>
                  <AddIngredientes
                    ingredientes={ingredientes}
                    lancheSelecionado={lancheSelecionado}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey={3}>3</Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
          {selectedKey > 1 ? (
            <Row style={{ marginTop: 10 }}>
              <Col md={2}>
                <Button
                  block
                  onClick={() => this.handleSelectKey(selectedKey - 1)}
                  variant="info"
                >
                  Voltar
                </Button>
              </Col>
              <Col md={{ offset: 8, span: 2 }}>
                <Button
                  block
                  onClick={() => this.handleSelectKey(selectedKey + 1)}
                  variant="info"
                >
                  Confirmar
                </Button>
              </Col>
            </Row>
          ) : (
            ''
          )}
        </Col>
      </div>
    );
  }
}

export default App;
