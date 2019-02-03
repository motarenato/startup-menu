import './InfoBox.css';
import React from 'react';
import PropTypes from 'prop-types';

InfoBoxText.propTypes = {
  quantidade: PropTypes.string,
  descQuantidade: PropTypes.string,
  descricao: PropTypes.string,
  pontuacao: PropTypes.number,
  header: PropTypes.string,
};

InfoBoxText.defaultProps = {
  quantidade: '',
  descQuantidade: '',
  descricao: '',
  header: '',
};

export default function InfoBoxText(props) {
  const { nome, ingredientes } = props;
  return (
    <div className="info_box_wrapper">
      <span className="top_info">{nome}</span>
      <span className="bottom_info">
        <div>Ingredientes:</div>
        {ingredientes.map(item => (
          <span className="desc">{item}&nbsp;</span>
        ))}
      </span>
    </div>
  );
}
