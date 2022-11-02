import React from 'react';
import { render, screen } from '@testing-library/react';

import Display from '../components/Screen';

describe('Display', () => {
  test('renders App component', () => {
    render(<Display />);

    screen.debug();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
