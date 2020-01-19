import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';
import { mdiCheckBold, mdiSeal } from '@mdi/js';

import './styles.scss';

export default function Card({ data }) {
  const {
    id,
    priceWithDiscount,
    best,
    image,
    name,
    maximumTime,
    priceWithoutDiscount,
  } = data;

  return (
    <div className={`card ${best && 'card--best'}`}>
      <div className="card__header">
        <img src={image} alt="Phone" className="image" />
        <h3 className="title">{name}</h3>
      </div>
      {best && (
        <div className="flag">
          <Icon className="flag__icon" path={mdiSeal} />
          <p className="flag__text">Melhor plano</p>
        </div>
      )}
      <div className="section">
        <div className="section__item">
          <Icon
            className="section__icon section__icon--include"
            path={mdiCheckBold}
          />
          <p className="section__text">{`Fale até ${maximumTime} minutos sem pagar nada`}</p>
        </div>
      </div>
      <div className="price">
        <div
          className="price__section"
          data-testid={`pricewithoutdiscount-${id}`}
        >
          <s className="price__number--disabled">
            {priceWithoutDiscount.replace('.', ',')}
          </s>
          <s className="price__text--disabled">/mês</s>
        </div>
        <div className="price__section" data-testid={`pricewithdiscount-${id}`}>
          <h3 className="price__number">
            {priceWithDiscount.replace('.', ',')}
          </h3>
          <h4 className="price__text">/mês</h4>
        </div>
      </div>
      <div className={`button ${best && 'button--best'}`}>
        <p className={`button__text ${best && 'button__text--best'}`}>
          Contratar
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    priceWithDiscount: PropTypes.string.isRequired,
    best: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    maximumTime: PropTypes.number.isRequired,
    priceWithoutDiscount: PropTypes.string.isRequired,
  }).isRequired,
};
