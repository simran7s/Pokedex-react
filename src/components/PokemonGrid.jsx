import React, { useEffect } from 'react'
import PokemonCard from "./PokemonCard"

function PokemonGrid({ pokemon, setLoading }) {



    // useEffect(() => {
    //     getCards(pokemon)
    // }, [pokemon])

    function getCards(ps) {
        setLoading(true);
        return (
            ps.map((p, index) => (
                <PokemonCard
                    key={p.name}
                    index={p.name}
                    pokemon={p}
                    setLoading={setLoading}
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