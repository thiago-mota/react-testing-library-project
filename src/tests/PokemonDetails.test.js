import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('7. Testa o componente Pokemondetails.js', () => {
  it('A página deve conter um texto com o nome do Pokemon', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const pokeName = screen.getByText(/Pikachu Details/i);
    expect(pokeName).toBeInTheDocument();
  });

  it('Não deve existir o link de navegação para os detalhes', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    expect(moreDetails).not.toBeInTheDocument();
  });

  it('A seção detalhes deve conter um h2 com o texto Summary', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const detailsHeading = screen.getByRole('heading', { name: /Summary/i });
    expect(detailsHeading).toBeInTheDocument();
  });

  it('A seção detalhes deve conter um parágrafo com resumo do Pokemon', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const pokeDescription = screen.getByText(/This intelligent Pokémon roasts hard ber/i);
    expect(pokeDescription).toBeInTheDocument();
  });

  it('A seção detalhes deve conter um h2 com o Game Locations', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const pokeLocation = screen.getByRole('heading', { name: /Game Locations of Pika/i });
    expect(pokeLocation).toBeInTheDocument();
  });

  it('TOdas as localizações do Pokemon devem ser mostradas', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const firstMap = screen.getByText(/Kanto Viridian Forest/i);
    expect(firstMap).toBeInTheDocument();

    const secondMap = screen.getByText(/Kanto Power Plant/i);
    expect(secondMap).toBeInTheDocument();
  });

  it('A imagem da localização deve ter atributos alt e src', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const locationImages = screen.getAllByAltText(/Pikachu Location/i);
    expect(locationImages).toHaveLength(2);

    expect(locationImages[0]).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locationImages[1]).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(locationImages[0] && locationImages[1])
      .toHaveProperty('alt', 'Pikachu location');
  });
  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);

    const favorited = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(favorited).toBeInTheDocument();
    userEvent.click(checkbox);

    expect(favorited).not.toBeInTheDocument();

    const favoritedLabel = screen.getByLabelText('Pokémon favoritado?');
    expect(favoritedLabel).toBeInTheDocument();
  });
});
