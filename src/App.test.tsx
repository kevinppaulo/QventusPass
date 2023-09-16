import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test if the app renders correctly', function(){
  it('Should render the password onto the screen', () => {
    render(<App />);
    const passworField = screen.getByPlaceholderText(/Start typing here/i);
    expect(passworField).toBeInTheDocument();
  });
})