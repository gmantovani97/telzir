import React, { useState, useMemo } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import Select from 'react-select';

import Rookie from '../../assets/images/rookie.svg';
import Prime from '../../assets/images/prime.svg';
import Elite from '../../assets/images/elite.svg';

import Card from './components/Card';
import './styles.scss';

export default function Pricing() {
  const [originValues, setOriginValues] = useState([
    {
      value: 11,
      label: '11',
    },
    {
      value: 11,
      label: '16',
    },
    {
      value: 11,
      label: '17',
    },
    {
      value: 11,
      label: '18',
    },
  ]);

  const [destinationValues, setDestinationValues] = useState([11, 16, 17, 18]);

  return (
    <div className="container">
      <h1 className="container__title">
        Insira os dados abaixo para avaliar suas opções
      </h1>
      <h4 className="container__subtitle">
        Fale até 120 minutos sem pagar nada
      </h4>
      <div className="data">
        <div className="data__field">
          <p className="data__text">DDD de origem</p>
          <input maxLength={2} type="text" className="data__input" />
        </div>
        <div className="data__field">
          <p className="data__text">DDD de destino</p>
          <input maxLength={2} type="text" className="data__input" />
        </div>
        <div className="data__field">
          <p className="data__text">Tempo da ligação (min)</p>
          <input maxLength={3} type="text" className="data__input" />
        </div>
      </div>
      <div className="content">
        <Card image={Rookie} title="FaleMais30" />
        <Card best image={Prime} title="FaleMais60" />
        <Card image={Elite} title="FaleMais120" />
      </div>
    </div>
  );
}
