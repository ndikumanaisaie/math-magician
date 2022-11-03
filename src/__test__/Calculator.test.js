import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Screen from '../components/Screen';

import Calculator from '../pages/Calculator';

describe('Calculator page component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const screenTree = renderer.create(<Screen />).toJSON();
    expect(screenTree).toMatchSnapshot();
  });

  it('should return the multiplication of two number from UI', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText(/35/)).toBeInTheDocument();
  });
});
