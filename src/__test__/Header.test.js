import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Header from '../components/Header';

it('renders correctly Header component', () => {
  const header = renderer.create(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,

  ).toJSON();
  expect(header).toMatchSnapshot();
});
