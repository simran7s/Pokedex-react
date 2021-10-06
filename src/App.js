import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import LoadButton from './components/LoadButton';
import PokemonGrid from './components/PokemonGrid';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import pokemonAPI from './utilities/api/pokemon.api';

const NUMBER_OF_POKEMON_ON_LOAD = 30; //890 max for regular pokemon
const loadPokemon = new pokemonAPI();

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentURL, setCurrentURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_OF_POKEMON_ON_LOAD}`)
  const [nextURL, setNextURL] = useState("")
  const [prevURL, setPrevURL] = useState("")
  const [loading, setLoading] = useState(true)
  const [disablePrev, setDisablePrev] = useState(false)
  const [disableNext, setDisableNext] = useState(false)

  useEffect(() => {
    setLoading(true)
    loadPokemon.get(currentURL)
      .then(data => {
        console.log(data.results[0])
        setNextURL(data.next)
        setPrevURL(data.previous)
        setPokemon(data.results)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [currentURL])


  useEffect(() => {
    if (!nextURL) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
    if (!prevURL) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }
  }, [nextURL, prevURL])

  if (loading) return (
    <div className="App">
      <Title />
      <SearchBar />
      <div class="loader"></div>
    </div>
  )

  function loadNext() {
    setCurrentURL(nextURL);
  }
  function loadPrev() {
    setCurrentURL(prevURL);
  }

  return (
    <div className="App">
      <Title />
      <SearchBar />
      <PokemonGrid pokemon={pokemon} setLoading={setLoading} />
      <div className="btn-container">
        <LoadButton text="PREV PAGE" onClick={loadPrev} disable={disablePrev} />
        <LoadButton text="NEXT PAGE" onClick={loadNext} disable={disableNext} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
