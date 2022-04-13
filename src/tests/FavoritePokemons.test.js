import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../components';
import App from '../App';

describe('3. Testa o componente FavoritePokemons.js', () => {
  it('Verifica se é exibida a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const favoritesNotFound = screen.getByText(/No favorite pokemon found/);
    expect(favoritesNotFound).toBeInTheDocument();
  });

  it('Testa se é exibido todos os cards de pokemons favoritados', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const favorite = screen.getByRole('checkbox');
    userEvent.click(favorite);

    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favoriteLink);

    const pokemonType = screen.getByTestId('pokemon-type');

    expect(pokemonType).toBeInTheDocument();
  });
});
