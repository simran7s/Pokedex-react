import React from 'react'
import PokemonCard from "./PokemonCard"

function PokemonGrid({ pokemon }) {

    function getCards(ps) {
        return (
            ps.map((p) => (
                <PokemonCard
                    key={p.name}
                    index={p.name}
                    pokemon={p}

                />
            ))
        )
    }


    return (
        <div className="grid-container">
            {/* {pokemon.map((p, index) => (
                <PokemonCard
                    key={p.name}
                    index={index + 1}
                    pokemon={p}
                />
            ))} */}
            {getCards(pokemon)}
        </div>
    )


}

export default PokemonGrid