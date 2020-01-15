import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import Select from 'react-select';

import Rookie from '../../assets/images/rookie.svg';
import Prime from '../../assets/images/prime.svg';
import Elite from '../../assets/images/elite.svg';

import Card from './components/Card';
import './styles.scss';

export default function Pricing() {
  const prices = {
    1116: 1.9,
    1611: 2.9,
    1117: 1.7,
    1711: 2.7,
    1118: 0.9,
    1811: 1.9,
  };
  const [originValue, setOriginValue] = useState(11);
  const [destinationValue, setDestinationValue] = useState(16);
  const [minutes, setMinutes] = useState(20);
  const [tax, setTax] = useState(
    prices[Number(`${originValue}${destinationValue}`)]
  );
  const [values, setValues] = useState([
    {
      id: 1,
      name: 'FaleMais 30',
      image: Rookie,
      maximumTime: 30,
      tax,
      fee: 1.1,
    },
    {
      id: 2,
      name: 'FaleMais 60',
      image: Prime,
      maximumTime: 60,
      tax,
      fee: 1.1,
    },
    {
      id: 3,
      name: 'FaleMais 120',
      image: Elite,
      maximumTime: 120,
      tax,
      fee: 1.1,
    },
  ]);

  useEffect(() => {
    setTax(prices[Number(`${originValue}${destinationValue}`)]);
  }, [originValue, destinationValue, minutes]);

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
          <input
            maxLength={2}
            type="text"
            className="data__input"
            value={originValue}
            defaultValue={originValue}
            onChange={e => setOriginValue(e.target.value)}
          />
        </div>
        <div className="data__field">
          <p className="data__text">DDD de destino</p>
          <input
            maxLength={2}
            type="text"
            className="data__input"
            value={destinationValue}
            defaultValue={destinationValue}
            onChange={e => setDestinationValue(e.target.value)}
          />
        </div>
        <div className="data__field">
          <p className="data__text">Tempo da ligação (min)</p>
          <input
            maxLength={3}
            type="text"
            className="data__input"
            value={minutes}
            defaultValue={minutes}
            onChange={e => setMinutes(e.target.value)}
          />
        </div>
      </div>
      <div className="content">
        {values.map(item => (
          <Card
            image={Rookie}
            data={item}
            choices={{ originValue, destinationValue, minutes }}
          />
        ))}
      </div>
    </div>
  );
}
