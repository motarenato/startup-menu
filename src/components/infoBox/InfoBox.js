import './InfoBox.css';
import React from 'react';
import { Col } from 'react-bootstrap';
import returnPrice from '../../functions/ReturnPrices';
import formatCurrency from '../../functions/FormatCurrency';

export default function InfoBoxText(props) {
  const { nome, ingredientes, ingredientesInfo, onClick } = props;
  console.log(returnPrice(ingredientes, ingredientesInfo));
  return (
    <div
      className="info_box_wrapper"
      onClick={() => onClick({ nome, ingredientes })}
    >
      <span className="top_info">{nome}</span>
      <span className="bottom_info">
        <Col md={12}>
          Ingredientes:
          {ingredientes.map(item => (
            <span className="desc">
              {ingredientesInfo[item] ? ingredientesInfo[item].name : item}
              &nbsp;
            </span>
          ))}
        </Col>
        <Col md={12}>
          Preço inicial:
          <span className="desc">
            {formatCurrency(returnPrice(ingredientes, ingredientesInfo).price)}
          </span>
        </Col>
      </span>
    </div>
  );
}
