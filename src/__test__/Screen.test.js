import React from 'react';
import renderer from 'react-test-renderer';

import Screen from '../components/Screen';

it('renders correctly the Screen component', () => {
  const screen = renderer.create(<Screen />).toJSON();
  expect(screen).toMatchSnapshot();
});
