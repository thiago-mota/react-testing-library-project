import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('1. Testa o componente App.js', () => {
  it('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /Home/i });
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const favPokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favPokemons).toBeInTheDocument();
  });

  // it('Testa se há o redirecionamento para a página inicial / ao clicar em Home', () => {

  // })
});

// https://testing-library.com/docs/queries/about#priority
