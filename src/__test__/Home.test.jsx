import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';

describe('Home', () => {
  test('renders App component', () => {
    render(<Home />);

    screen.debug();
    expect(screen.getByText(/Welcome to Math Magician/)).toBeInTheDocument();
  });
});
