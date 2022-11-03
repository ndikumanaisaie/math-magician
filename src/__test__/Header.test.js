import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import NavBar from '../components/Header';

describe('Header', () => {
  test('renders App component', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    screen.debug();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
