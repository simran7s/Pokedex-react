class pokemonAPI {
    async get(url) {
        // Fetch all pokemon from PokeAPI
        const response = await fetch(url)

        const resData = await response.json()

        return resData
    }
}

export default pokemonAPI;