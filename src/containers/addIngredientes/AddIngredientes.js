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
    const { price, promocoes } = returnPrice(
      lancheSelecionado.ingredientes,
      ingredientes,
      ingredientesAdicionais,
    );
    return (
      <div className="add_ingredientes">
        <h2 style={{ marginTop: '10px' }}>
          Adicione os ingrediente desejados e clique em confirmar para concluir
          pedido
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
        <div className="footer_pomocoes">
          <strong>Promoções Ativas:</strong>
          {promocoes.promoLight && (
            <div>
              Light, lanches com alface e sem bacon ganham 10% de desconto.
            </div>
          )}
          {promocoes.promoCarne && (
            <div>
              Muita Carne, a cada 3 porçoes de carne, o cliente só paga 2.
            </div>
          )}
          {promocoes.promoQueijo && (
            <div>
              Muito Queijo, a cada 3 porçoes de queijo, o cliente só paga 2.
            </div>
          )}
        </div>
        <div className="footer_total">
          <strong>Valor Total:</strong>
          {formatCurrency(price)}
        </div>
      </div>
    );
  }
}
