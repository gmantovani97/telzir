import React from 'react';
import { render } from '@testing-library/react';

import Card from '@/pages/Pricing/components/Card';
import image from '@/assets/images/prime.svg';

describe('Card component', () => {
  it('matches snapshot', () => {
    const data = {
      id: 1,
      priceWithDiscount: '167.20',
      best: false,
      image,
      name: 'Falemais 120',
    };
    const { asFragment } = render(<Card data={data} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
