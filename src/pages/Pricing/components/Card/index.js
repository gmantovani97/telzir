import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';
import { mdiCheckBold, mdiClose, mdiSeal } from '@mdi/js';

import './styles.scss';

export default function Card({ data }) {
  const { id, priceWithDiscount, best, image, name } = data;

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
          <p className="section__text">Ligações locais gratuitas</p>
        </div>
        <div className="section__item">
          <Icon
            className="section__icon section__icon--include"
            path={mdiCheckBold}
          />
          <p className="section__text">
            Ligações para mesma operadora sem custo
          </p>
        </div>
        <div className="section__item">
          <Icon
            className="section__icon section__icon--exclude"
            path={mdiClose}
          />
          <p className="section__text">
            Ligações entre 00:00 e 06:00 com 50% de desconto
          </p>
        </div>
        <div className="section__item">
          <Icon
            className="section__icon section__icon--exclude"
            path={mdiClose}
          />
          <p className="section__text">
            Ligações em feriado com 20% de desconto
          </p>
        </div>
      </div>
      <div className="price">
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
  }).isRequired,
};
