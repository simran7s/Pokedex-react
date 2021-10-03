import React from "react"
import Capsule from "./Capsule"

function PokemonCard() {
    return (
        <div className="pokemon-card">
            <div className="pokemon-container text-light">
                <div className="card-top-info">
                    <p className="pokemon-index">001</p>
                    <p className="pokemon-name" >Bulbasaur</p>
                </div>
                <div className="image-container">
                    <img className="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur" />
                </div>
                <div className="card-bottom-info">
                    <p className="pokemon-type">
                        <Capsule text="GRASS" />
                        <Capsule text="POISON" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard