import React from "react"
import Capsule from "./Capsule"

function PokemonCard(props) {
    const { name, index, image, types } = props
    return (
        <div className="pokemon-card">
            <div className="pokemon-container text-light">
                <div className="card-top-info">
                    <p className="pokemon-index">001</p>
                    <p className="pokemon-name" >{name}</p>
                </div>
                <div className="image-container">
                    <img className="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur" />
                </div>
                <div className="card-bottom-info">
                    <div className="pokemon-type">
                        <Capsule text="GRASS" />
                        <Capsule text="POISON" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard