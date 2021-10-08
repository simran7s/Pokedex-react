import React from 'react';
import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import AllPokemon from './components/AllPokemon';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SingleSearch from './components/SingleSearch';
import Title from './components/Title';
import pokemonAPI from './utilities/api/pokemon.api';

const NUMBER_OF_POKEMON_ON_LOAD = 30; //898 max for regular pokemon
const loadPokemon = new pokemonAPI();

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentURL, setCurrentURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_OF_POKEMON_ON_LOAD}`)
  const [nextURL, setNextURL] = useState("")
  const [prevURL, setPrevURL] = useState("")
  const [loading, setLoading] = useState(true)
  const [disablePrev, setDisablePrev] = useState(false)
  const [disableNext, setDisableNext] = useState(false)
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    setLoading(true)
    loadPokemon.get(currentURL)
      .then(data => {
        setNextURL(data.next)
        setPrevURL(data.previous)
        setPokemon(data.results)
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
        // Display autoclosing error message 
        setErrorMessage("Something went wrong trying to load the Pokemon. Try again Later")
        setTimeout(() => {
          setErrorMessage("")
        }, 5000);
      })
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


  // Display spinner iff loading
  if (loading) return (
    <div className="App">
      <Title />
      <SearchBar />
      <div className="loader"></div>
    </div>
  )

  function loadNext() {
    setCurrentURL(nextURL);
  }
  function loadPrev() {
    setCurrentURL(prevURL);
  }

  function searchPokemon(searchInput) {
    // If name is given
    if (searchInput) {
      loadPokemon.get(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(data => {
          setSearchInput(data.name)
          setData({
            url: `https://pokeapi.co/api/v2/pokemon/${searchInput}`,
            name: data.name,
            info: data
          })
        })
        .catch(err => {
          console.log(err)
          setErrorMessage("Unable to find a Pokemon with that name or ID.")
          setTimeout(() => {
            setErrorMessage("")
          }, 5000);
        })
    }
    // Give no name is given (reset)
    else {
      setCurrentURL(`https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_OF_POKEMON_ON_LOAD}`)
      setSearchInput("")
      setErrorMessage("")
    }
  }

  return (
    <div className="App">
      <Title />

      {/* Display error message when there is an error message */}
      {errorMessage && <Alert errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}

      <SearchBar onClick={searchPokemon} />


      {/* Display all pokemon when iff a valid search is not made */}
      {
        !searchInput && <AllPokemon
          pokemon={pokemon}
          loadNext={loadNext}
          loadPrev={loadPrev}
          disableNext={disableNext}
          disablePrev={disablePrev}
        />
      }

      {/* Display pokemon card of the searched pokemon */}
      {searchInput && < SingleSearch
        searchInput={searchInput}
        data={data} />}
      <Footer />
    </div >
  );
}

export default App;
