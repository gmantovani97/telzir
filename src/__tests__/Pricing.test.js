import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pricing from '@/pages/Pricing';
import Card from '@/pages/Pricing/components/Card';

describe('Pricing component', () => {
  it('should calculate value of plans when minutes input change', () => {
    const { getByTestId, getByText } = render(<Pricing />);

    const input = getByTestId('minutes-input');
    const originSelect = getByTestId('origin-select');
    const destinationSelect = getByTestId('destination-select');

    fireEvent.change(originSelect, { target: { value: 18 } });
    fireEvent.change(destinationSelect, { target: { value: 11 } });
    fireEvent.change(input, { target: { value: '200' } });

    expect(Number(originSelect.value)).toBe(18);
    expect(Number(destinationSelect.value)).toBe(11);
    expect(input.value).toBe('200');

    expect(getByTestId('pricewithdiscount-3')).toContainElement(
      getByText('167.20')
    );
  });
});
