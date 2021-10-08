import React from 'react'
import PokemonCard from './PokemonCard'

function SingleSearch(props) {
    const { searchInput, data } = props

    return (
        <div className="grid-container">

            <PokemonCard key={searchInput} index={searchInput} pokemon={data} />

        </div>

    )
}

export default SingleSearch
