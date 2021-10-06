import React from "react"
import { useEffect, useState } from "react/cjs/react.development"
import Capsule from "./Capsule"
import pokemonAPI from '../utilities/api/pokemon.api'

function PokemonCard(props) {
    const { index, pokemon } = props
    const [currentPokemon, setCurrentPokemon] = useState({
        name: 'loading',
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
        }
    })
    const [type, setType] = useState("")
    const [speciesURL, setSpeciesURL] = useState("")
    const [name, setName] = useState("")

    const [colour, setColour] = useState("")
    let cardStyle;

    useEffect(() => {
        const loadPokemon = new pokemonAPI()
        // MAIN DETAILS
        if (pokemon?.url) {
            loadPokemon.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
                .then(data => {
                    setCurrentPokemon(data)
                    setName(data.name)
                    setType(data.types[0].type.name)
                    setSpeciesURL(data.species.url)
                })
                .catch(err => console.log(err))
        }
        // setType(currentPokemon.types[0].type.name)

        // COLOUR


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemon])

    useEffect(() => {
        const loadPokemon = new pokemonAPI()

        if (speciesURL) {
            loadPokemon.get(speciesURL)
                .then((data) => {
                    setColour(data.color.name)
                    // console.log(colour);

                }).catch(err => console.log(err))
        }
    }, [speciesURL])


    useEffect(() => {
        currentPokemon.colour = colour
        // console.log("*********************");
        // console.log(currentPokemon.colour)
    }, [colour, currentPokemon])

    return (
        <div className={`pokemon-card ${colour}`} id={currentPokemon.name} >
            <div className="pokemon-container text-light">
                <div className="card-top-info">
                    <p className="pokemon-index">{currentPokemon.id}</p>
                    <p className="pokemon-name" >{currentPokemon.name}</p>
                </div>
                <div className="image-container">
                    <img className="pokemon-image" src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
                </div>
                <div className="card-bottom-info">
                    <div className="pokemon-type">
                        <Capsule colour={colour} text={type ? type : "Other"} />
                        {/* <Capsule text={currentPokemon.types[1].type.name} /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PokemonCard