import React from 'react';
import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import pokemonAPI from './utilities/api/pokemon.api';

const loadPokemon = new pokemonAPI();

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    loadPokemon.get()
      .then(data => {
        console.log(data)
        setPokemons(data.results)
      })
      .catch(err => console.log(err))
  }, [])

  let pokemonCardsList = []
  pokemons.forEach(pokemon => pokemonCardsList.push(<PokemonCard name={pokemon.name} />))

  return (
    <div className="App">
      <Title />
      <SearchBar />

      <div className="grid-container">
        {pokemonCardsList}
      </div>

    </div>
  );
}

export default App;
