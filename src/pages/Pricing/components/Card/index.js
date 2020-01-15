import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';
import { mdiCheckBold, mdiClose, mdiSeal } from '@mdi/js';

import './styles.scss';

export default function Card({ best, data, choices }) {
  console.log(choices);
  console.log(data);
  const { maximumTime, tax, fee } = data;
  const { originValue, destinationValue, minutes } = choices;
  const exceededMinutes = maximumTime - minutes;
  const [price, setPrice] = useState({
    priceWithDiscount:
      exceededMinutes < 0 ? Math.abs(exceededMinutes) * (tax * fee) : 0,
    priceWithoutDiscount: maximumTime * tax,
  });

  useEffect(() => {
    setPrice({
      priceWithDiscount:
        exceededMinutes < 0 ? Math.abs(exceededMinutes) * (tax * fee) : 0,
      priceWithoutDiscount: mdiAccountMultiplePlusOutline * tax,
    });
    console.log(price);
  }, []);

  return (
    <div className={`card ${best && 'card--best'}`}>
      <img src={data.image} alt="Phone" className="image" />
      <h3 className="title">{data.name}</h3>
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
        <div className="price__section">
          <h3 className="price__number">82,50</h3>
          <h4 className="price__text">/mês</h4>
        </div>
      </div>
      <div className={`button ${best && 'button--best'}`}>
        <div className={`button__text ${best && 'button__text--best'}`}>
          Contratar
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  best: PropTypes.bool,
  image: PropTypes.string.isRequired,
  data: PropTypes.shape.isRequired,
  choices: PropTypes.shape.isRequired,
};

Card.defaultProps = {
  best: false,
};
