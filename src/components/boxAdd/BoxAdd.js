import React from 'react';
import './BoxAdd.css';
import { Col, Button, Row } from 'react-bootstrap';
import formatCurrency from '../../functions/FormatCurrency';

export default function BoxAdd(props) {
  const { name, item, value, ingredientesAdicionais, changeAdicionais } = props;
  console.log(props);
  return (
    <Row md={12} className="justify-content-md-center box_add_wrapper">
      <Col md={6}>
        {name} - {formatCurrency(value)}
      </Col>
      <Col md={5}>
        <Button
          variant="light"
          size="sm"
          onClick={() =>
            ingredientesAdicionais[item] > 0
              ? changeAdicionais(item, ingredientesAdicionais[item] - 1)
              : ''
          }
        >
          Remover
        </Button>
        <input
          size="1"
          disabled
          className="input_box_add"
          value={ingredientesAdicionais[item]}
        />
        <Button
          variant="light"
          size="sm"
          onClick={() =>
            changeAdicionais(item, ingredientesAdicionais[item] + 1)
          }
        >
          Adicionar
        </Button>
      </Col>
    </Row>
  );
}
