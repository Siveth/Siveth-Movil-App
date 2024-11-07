import React from 'react';
import { render } from '@testing-library/react-native';
import Login from '../app/(tabs)/Login'; // Asegúrate de que esta ruta sea correcta

describe('Login Screen', () => {
  it('renders login form correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Login/>);

    expect(getByPlaceholderText(/username/i)).toBeTruthy();
    expect(getByPlaceholderText(/password/i)).toBeTruthy();
    expect(getByText(/login/i)).toBeTruthy();
  });
});
