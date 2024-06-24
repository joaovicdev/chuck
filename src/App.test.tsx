import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { App } from './App';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: { value: 'fact 1' } }),
}));

describe('<App />', () => {
  it('should render the app', () => {
    const { getByText } = render(<App />);

    const component = getByText('Buscar fatos do Chuck Norris!');

    expect(component).toBeInTheDocument;
  });

  it('should get fact when clicked in button', async () => {
    const { getByText } = render(<App />);

    const button = getByText('Buscar fatos do Chuck Norris!');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('fact 1')).toBeInTheDocument();
    });
  });
});