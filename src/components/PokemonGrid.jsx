import React, { useEffect } from 'react'
import PokemonCard from "./PokemonCard"

function PokemonGrid({ pokemon }) {



    // useEffect(() => {
    //     getCards(pokemon)
    // }, [pokemon])

    function getCards(ps) {
        console.log("***************")
        console.log(pokemon)
        console.log("***************")
        return (
            ps.map((p, index) => (
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