import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pricing from '@/pages/Pricing';

describe('Pricing component', () => {
  it('should calculate value of plans when minutes input change', () => {
    const { getByTestId, debug } = render(<Pricing />);

    debug();

    const input = getByTestId('minutes_input');

    fireEvent.change(input, { target: { value: '20' } });

    debug();

    expect(input.value).toBe('20');
  });
  // it('should calculate value of plans when destination input change', () => {
  //   const { getByTestId } = render(<Pricing />);

  //   const select = getByTestId('origin-select');

  //   fireEvent.select(select, { target: { value: '17' } });

  //   expect(input.value).toBe('17');
  // });
});
