import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('5. TEsta o componente Pokedex.js', () => {
  it('Testa se a página contém um h2', () => {
    renderWithRouter(<App />);

    const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });

    expect(h2).toBeInTheDocument();
  });

  it('TEsta se;e exibido o próximo pokemon quando o botão próximo é clicado', () => {
    renderWithRouter(<App />);

    const nextButton = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(nextButton);

    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();

    userEvent.click(nextButton);
    const caterpie = screen.getByText(/Caterpie/i);
    expect(caterpie).toBeInTheDocument();

    userEvent.click(nextButton);
    const ekans = screen.getByText(/Ekans/i);
    expect(ekans).toBeInTheDocument();

    userEvent.click(nextButton);
    const alakazam = screen.getByText(/Alakazam/i);
    expect(alakazam).toBeInTheDocument();

    userEvent.click(nextButton);
    const mew = screen.getByText(/Mew/i);
    expect(mew).toBeInTheDocument();

    userEvent.click(nextButton);
    const rapidash = screen.getByText(/Rapidash/i);
    expect(rapidash).toBeInTheDocument();

    userEvent.click(nextButton);
    const snorlax = screen.getByText(/Snorlax/i);
    expect(snorlax).toBeInTheDocument();

    userEvent.click(nextButton);
    const dragonair = screen.getByText(/Dragonair/i);
    expect(dragonair).toBeInTheDocument();
  });

  it('Testa se o botão contém o texto Próximo Pokemon', () => {
    renderWithRouter(<App />);

    const nextPokemonBtn = screen.getByTestId('next-pokemon');
    expect(nextPokemonBtn).toHaveTextContent(/Próximo pokémon/i);
  });

  it('Testa se é mostrado apenas um pokemon por vez', () => {
    renderWithRouter(<App />);

    const pokemons = screen.getAllByTestId('pokemon-name');
    expect(pokemons).toHaveLength(1);
  });

  it('Testa os botões de filtro da Pokedex.', () => {
    renderWithRouter(<App />);

    const filters = screen.getAllByTestId('pokemon-type-button');
    expect(filters[0]).toHaveTextContent(/electric/i);
  });

  it('Testa se a Pokedex contém um botão para resetar os filtros', () => {
    renderWithRouter(<App />);

    const clearFilter = screen.getByRole('button', { name: /All/i });
    expect(clearFilter).toBeInTheDocument();
    userEvent.click(clearFilter);

    const pokeName = screen.getByTestId('pokemon-name');
    expect(pokeName).toHaveTextContent(/Pikachu/i);
  });
});
