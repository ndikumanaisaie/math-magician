import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Calculator from '../pages/Calculator';

describe('Calculator', () => {
  test('renders App component', () => {
    render(<Calculator />);

    screen.debug();
    expect(screen.getByText('÷')).toBeInTheDocument();
  });
});
