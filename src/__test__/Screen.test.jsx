import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Display from '../components/Screen';

describe('Display', () => {
  test('renders App component', () => {
    render(<Display />);

    screen.debug();
    expect(screen.getByText(/'0'/)).toBeInTheDocument();
  });
});
