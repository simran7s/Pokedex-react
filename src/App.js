import React from 'react';
import { useState, useEffect } from 'react';
import PokemonGrid from './components/PokemonGrid';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import pokemonAPI from './utilities/api/pokemon.api';

const loadPokemon = new pokemonAPI();

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    loadPokemon.get("https://pokeapi.co/api/v2/pokemon/")
      .then(data => {
        setPokemon(data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Title />
      <SearchBar />
      <PokemonGrid pokemon={pokemon} />
    </div>
  );
}

export default App;
