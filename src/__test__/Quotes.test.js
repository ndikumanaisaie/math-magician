import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Quotes from '../pages/Quotes';

describe('Quotes', () => {
  test('renders App component', () => {
    render(<Quotes />);

    screen.debug();
    expect(screen.getByText(/Mathematics/)).toBeInTheDocument();
  });
});
