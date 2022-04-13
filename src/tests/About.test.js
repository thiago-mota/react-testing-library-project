import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from '../renderWithRouter';

describe('2. Testa o componente About.js', () => {
  it('Testa se a página contém um h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const h2 = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });

    expect(h2).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const firstParagraph = screen.getByText(/This application simulates a Pokédex, a d/i);
    const secondParagraph = screen.getByText(/One can filter Pokémons by type, and see/i);

    expect(firstParagraph && secondParagraph).toBeInTheDocument();
  });

  it('Testa se a página contém a imagem de uma Pokédex',() => {
    renderWithRouter(<About />);

    const img = screen.getByRole('img');

    expect(img).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
