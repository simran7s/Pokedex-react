import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <SearchBar />

      <div className="grid-container">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>

    </div>
  );
}

export default App;
