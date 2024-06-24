import React from 'react';
import { render } from '@testing-library/react';
import { RandomButton } from '.';

describe('<RandomButton />', () => {
  it('should render the button', () => {
    const { getByText } = render(<RandomButton onClick={() => {}} />);

    const component = getByText('Buscar fatos do Chuck Norris!');

    expect(component).toBeInTheDocument;
  });

  it('should call the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<RandomButton onClick={onClick} />);

    const component = getByText('Buscar fatos do Chuck Norris!');
    component.click();

    expect(onClick).toHaveBeenCalled();
  });
});
