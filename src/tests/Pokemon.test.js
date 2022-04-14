import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('6. Testa o componente Pokemon.js', () => {
  it('Testa se é renderizado um card com as informações corretas do Pokemon', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const pokemonImg = screen.getByAltText(/Pikachu sprite/i);

    expect(pokemonName).toHaveTextContent(/Pikachu/i);
    expect(pokemonType).toHaveTextContent(/Electric/i);
    expect(pokemonWeight).toHaveTextContent(/Average weight: 6.0 kg/i);
    expect(pokemonImg).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImg).toHaveProperty('alt', 'Pikachu sprite');
  });

  it('Testa se contém um link de navegação para exibir detalhes', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /More details/i });
    expect(detailsLink).toHaveProperty('href', 'http://localhost/pokemons/25');
  });

  it('Testa se ao clicar no link é feito o redirecionamento da aplicação', () => {
    const { history } = renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(detailsLink);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('Testa se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const pikachu = '/pokemon/25';

    history.push(pikachu);
    expect(history.location.pathname).toBe(pikachu);
  });

  it('Testa se existe um ícone de estrela nos Pokemons favoritados', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const favoriteBox = screen.getByRole('checkbox');
    // expect(favoriteBox).toBeInTheDocument();
    userEvent.click(favoriteBox);

    const starImg = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(starImg).toHaveProperty('src', 'http://localhost/star-icon.svg');
    expect(starImg).toHaveProperty('alt', 'Pikachu is marked as favorite');
  });
});
