import React from 'react';
import renderer from 'react-test-renderer';

import Quotes from '../pages/Quotes';

it('renders correctly the Quotes component', () => {
  const quotes = renderer.create(<Quotes />).toJSON();
  expect(quotes).toMatchSnapshot();
});
