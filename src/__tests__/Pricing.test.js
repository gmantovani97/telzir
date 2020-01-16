import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pricing from '@/pages/Pricing';
import Card from '@/pages/Pricing/components/Card';

describe('Pricing component', () => {
  it('should calculate value of plans when minutes input change', () => {
    const { getByTestId, debug, getByText } = render(<Pricing />);

    const input = getByTestId('minutes-input');
    const originSelect = getByTestId('origin-select');
    const destinationSelect = getByTestId('destination-select');

    fireEvent.click(originSelect, getByTestId('origin-option-18'));
    fireEvent.click(destinationSelect, getByTestId('destination-option-11'));
    fireEvent.change(input, { target: { value: '20' } });

    expect(originSelect.value).toBe(18);
    expect(destinationSelect.value).toBe(11);
    expect(input.value).toBe('200');
  });
});
