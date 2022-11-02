import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../components/Header';

describe('Header', () => {
  test('renders App component', () => {
    render(<Header />);

    screen.debug();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
