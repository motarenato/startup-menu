import React from 'react';
import './AddIngredientes.css';
import { Col } from 'react-bootstrap';
import BoxAdd from '../../components/boxAdd/BoxAdd';
import returnPrice from '../../functions/ReturnPrices';
import formatCurrency from '../../functions/FormatCurrency';
export default class AddIngredientes extends React.Component {
  render() {
    const {
      ingredientes,
      lancheSelecionado,
      ingredientesAdicionais,
      changeAdicionais,
    } = this.props;
    return (
      <div className="add_ingredientes">
        <h2 style={{ marginTop: '10px' }}>
          Adicione os ingrediente desejados e clique em confirmar
        </h2>
        {Object.keys(ingredientes).map(item => (
          <div>
            <BoxAdd
              {...ingredientes[item]}
              item={item}
              ingredientesAdicionais={ingredientesAdicionais}
              changeAdicionais={changeAdicionais}
            />
          </div>
        ))}
        <div className="footer_total">
          <strong>Valor Total:</strong>
          {formatCurrency(
            returnPrice(
              lancheSelecionado.ingredientes,
              ingredientes,
              ingredientesAdicionais,
            ),
          )}
        </div>
      </div>
    );
  }
}
