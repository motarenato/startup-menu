import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { InfoBox } from '../../components';

export default class SelecionarTipos extends React.Component {
  render() {
    const { lanches, handleSelectKey } = this.props;
    return (
      <Row className="justify-content-md-center">
        <h2 style={{ marginTop: '10px' }}>
          Selecione uma opção de lanche para começar{' '}
        </h2>
        {lanches.map(item => (
          <Col
            md={10}
            style={{ marginTop: '10px' }}
            onClick={() => handleSelectKey(2)}
          >
            <InfoBox {...item} />
          </Col>
        ))}
      </Row>
    );
  }
}
