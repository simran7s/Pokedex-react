import React from 'react'
import PokemonCard from "./PokemonCard"

function PokemonGrid({ pokemon }) {
    return (
        <div className="grid-container">
            {pokemon.map((p, index) => (
                <PokemonCard
                    key={index + 1}
                    index={index + 1}
                    pokemon={p}
                />
            ))}
        </div>
    )
}

export default PokemonGrid