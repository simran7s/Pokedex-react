class pokemonAPI {
    async get() {
        // Fetch all pokemon from PokeAPI
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")

        const resData = await response.json()

        return resData
    }
}

export default pokemonAPI;