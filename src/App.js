import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import LoadButton from './components/LoadButton';
import PokemonGrid from './components/PokemonGrid';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import pokemonAPI from './utilities/api/pokemon.api';

const NUMBER_OF_POKEMON_ON_LOAD = 30; //890 max


const loadPokemon = new pokemonAPI();




function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentURL, setCurrentURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_OF_POKEMON_ON_LOAD}`)
  const [nextURL, setNextURL] = useState("")
  const [prevURL, setPrevURL] = useState("")
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    setLoading(true)
    loadPokemon.get(`https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_OF_POKEMON_ON_LOAD}`)
      .then(data => {
        console.log(data.results[0])
        setNextURL(data.next)
        setPrevURL(data.previous)
        setLoading(false)
        setPokemon(data.results)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setLoading(true)
    loadPokemon.get(currentURL)
      .then(data => {
        console.log(data.results[0])
        setNextURL(data.next)
        setPrevURL(data.previous)
        if (empty) {
          // setPokemon([])
          // setPokemon([{ name: "simran", url: "https://pokeapi.co/api/v2/pokemon/31/" }, { name: "Sunny", url: "https://pokeapi.co/api/v2/pokemon/32/" }])
          setPokemon(data.results)
        }
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [currentURL])

  if (loading) return (
    <div className="App">
      <Title />
      <SearchBar />
      <div class="loader"></div>
    </div>
  )

  function loadNext() {
    setCurrentURL(nextURL);
    setEmpty(true)
  }
  function loadPrev() {
    setCurrentURL(prevURL);
    setEmpty(true)
  }



  return (
    <div className="App">
      <Title />
      <SearchBar />
      <PokemonGrid pokemon={pokemon} />
      <LoadButton text="PREV PAGE" onClick={loadPrev} />
      <LoadButton text="NEXT PAGE" onClick={loadNext} />
      <Footer />
    </div>
  );
}

export default App;
