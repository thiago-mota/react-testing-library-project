import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('4. Testa componente NotFound.js', () => {
  it('Verifica se a página contem um heading h2', () => {
    renderWithRouter(<NotFound />);

    const h2 = screen.getByRole('heading', { name: /Page requested not found/i });

    expect(h2).toBeInTheDocument();
  });

  it('Verifica se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);

    const img = screen.getByAltText(/Pikachu crying because the page requested was/);

    expect(img).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
