import React from "react"
import { useEffect, useState } from "react/cjs/react.development"
import Capsule from "./Capsule"
import pokemonAPI from '../utilities/api/pokemon.api'

function PokemonCard(props) {
    const { index, pokemon } = props
    const [currentPokemon, setCurrentPokemon] = useState({
        name: 'loading',
        sprites: {
            // front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
            front_default: "https://i.gifer.com/Yg6z.gif"
        }
    })
    const [type, setType] = useState("")
    const [speciesURL, setSpeciesURL] = useState("")
    const [colour, setColour] = useState("")

    useEffect(() => {
        const loadPokemon = new pokemonAPI()
        // MAIN DETAILS
        if (pokemon?.url) {
            loadPokemon.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
                .then(data => {

                    setCurrentPokemon(data)
                    setType(data.types[0].type.name)
                    setSpeciesURL(data.species.url)
                })
                .catch(err => console.log(err))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.pokemon])

    useEffect(() => {
        const loadPokemon = new pokemonAPI()
        if (speciesURL) {
            loadPokemon.get(speciesURL)
                .then((data) => {
                    setColour(data.color.name)
                }).catch(err => console.log(err))
        }
    }, [speciesURL])


    useEffect(() => {
        currentPokemon.colour = colour
    }, [colour, currentPokemon])
    return (
        <div className={`pokemon-card ${colour}`} id={currentPokemon.name} >
            <div className="pokemon-container text-light">
                <div className="card-top-info">
                    <p className="pokemon-index">{currentPokemon.id}</p>
                    <p className={`pokemon-name ${currentPokemon.name.length > 21 && "smaller-text"}`} >{currentPokemon.name}</p>
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