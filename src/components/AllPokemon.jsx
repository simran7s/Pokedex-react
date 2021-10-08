import React from 'react'
import PokemonGrid from './PokemonGrid'
import LoadButton from './LoadButton'

function AllPokemon(props) {
    const { loadNext, loadPrev, disableNext, disablePrev, pokemon } = props

    return (
        <>
            <PokemonGrid pokemon={pokemon} />
            <div className="btn-container">
                <LoadButton text="PREV PAGE" onClick={loadPrev} disable={disablePrev} />
                <LoadButton text="NEXT PAGE" onClick={loadNext} disable={disableNext} />
            </div>
        </>
    )
}

export default AllPokemon
