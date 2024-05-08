import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Renders the Booking Form heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);

  const reserveButton = screen.getByText("Reserve Table");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Reserve a Table");
    expect(headingElementNew).toBeInTheDocument();
});