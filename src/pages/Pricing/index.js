import React, { useState, useMemo } from 'react';

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

  const tax = useMemo(() => {
    if (originValue !== 11 && destinationValue !== 11) {
      return prices[Number(`${originValue}11`)];
    }
    if (originValue === 11 && destinationValue === 11) {
      return prices[Number(`1116`)];
    }
    return prices[Number(`${originValue}${destinationValue}`)];
  }, [originValue, destinationValue]);

  const values = useMemo(() => {
    const array = [
      {
        id: 1,
        name: 'FaleMais 30',
        image: Rookie,
        best: false,
        maximumTime: 30,
        priceWithDiscount:
          30 - minutes < 0
            ? (Math.abs(30 - minutes) * (tax * 1.1)).toFixed(2)
            : (0.0).toFixed(2),
        priceWithoutDiscount: (minutes * tax).toFixed(2),
        tax,
      },
      {
        id: 2,
        name: 'FaleMais 60',
        image: Prime,
        best: false,
        maximumTime: 60,
        priceWithDiscount:
          60 - minutes < 0
            ? (Math.abs(60 - minutes) * (tax * 1.1)).toFixed(2)
            : (0.0).toFixed(2),
        priceWithoutDiscount: (minutes * tax).toFixed(2),
        tax,
      },
      {
        id: 3,
        name: 'FaleMais 120',
        image: Elite,
        best: false,
        maximumTime: 120,
        priceWithDiscount:
          120 - minutes < 0
            ? (Math.abs(120 - minutes) * (tax * 1.1)).toFixed(2)
            : (0.0).toFixed(2),
        priceWithoutDiscount: (minutes * tax).toFixed(2),
        tax,
      },
    ];
    let maxValue = Infinity;
    let key;
    array.forEach((item, index) => {
      if (maxValue > item.priceWithDiscount) {
        maxValue = item.priceWithDiscount;
        key = index;
      }
    });
    array[key].best = true;
    return array;
  }, [minutes, tax]);

  function handleChangeOriginValue(value) {
    setOriginValue(Number(value));
    if (value !== 11) {
      setDestinationValue(11);
    } else if (destinationValue === 11) {
      setDestinationValue(16);
    }
  }

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
          <select
            data-testid="origin-select"
            value={originValue}
            onChange={e =>
              handleChangeOriginValue(Number(e.currentTarget.value))
            }
          >
            <option value={11} data-testid="origin-option-11">
              11
            </option>
            <option value={16} data-testid="origin-option-16">
              16
            </option>
            <option value={17} data-testid="origin-option-17">
              17
            </option>
            <option value={18} data-testid="origin-option-18">
              18
            </option>
          </select>
        </div>
        <div className="data__field">
          <p className="data__text">DDD de destino</p>
          <select
            data-testid="destination-select"
            value={destinationValue}
            onChange={e => setDestinationValue(Number(e.currentTarget.value))}
          >
            <option
              value={16}
              disabled={originValue !== 11}
              data-testid="destination-option-16"
            >
              16
            </option>
            <option
              value={17}
              disabled={originValue !== 11}
              data-testid="destination-option-17"
            >
              17
            </option>
            <option
              value={18}
              disabled={originValue !== 11}
              data-testid="destination-option-18"
            >
              18
            </option>
            <option
              value={11}
              disabled={originValue === 11}
              data-testid="destination-option-11"
            >
              11
            </option>
          </select>
        </div>
        <div className="data__field">
          <p className="data__text">Tempo da ligação (min)</p>
          <input
            data-testid="minutes-input"
            maxLength={3}
            type="text"
            className="data__input"
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
          />
        </div>
      </div>
      <div className="content">
        {values.map(item => (
          <Card
            key={item.id}
            image={Rookie}
            data={item}
            choices={{ originValue, destinationValue, minutes }}
          />
        ))}
      </div>
    </div>
  );
}
