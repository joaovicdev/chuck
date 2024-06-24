import React from 'react';
import { render } from '@testing-library/react';
import { ListFacts } from '.';

describe('<ListFacts />', () => {
  it('should render the list of facts', () => {
    const { getByText } = render(<ListFacts facts={['fact 1', 'fact 2']} />);

    const fact1 = getByText('fact 1');

    expect(fact1).toBeInTheDocument;
  });

  it('should render without facts', () => {
    const { getByText } = render(<ListFacts facts={[]} />);

    const component = getByText('Você não possui fatos listados!');

    expect(component).toBeInTheDocument;
  });
});