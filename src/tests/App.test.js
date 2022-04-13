import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('Testa se há o redirecionamento para a página inicial / ao clicar em Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i });

    userEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
  });

  it('Testa se há o redirecionamento para a página About / ao clicar em About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /About/i });

    userEvent.click(aboutLink);
    expect(history.location.pathname).toBe('/about');
  });

  it('Testa redireciona para a página Favorites ao clicar em Favorite Pokemons', () => {
    const { history } = renderWithRouter(<App />);
    const favPokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });

    userEvent.click(favPokemons);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Testa se redireciona para a pagina NotFound ao entrar em URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/404');
    expect(history.location.pathname).toBe('/404');
  });
});

// https://testing-library.com/docs/queries/about#priority
