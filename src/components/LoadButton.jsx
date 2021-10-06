import React from 'react'
// import pokemonAPI from '../utilities/api/pokemon.api'



function LoadButton(props) {
    // const loadPokemon = new pokemonAPI()
    const { text, onClick } = props
    return (
        <div className="div">
            <button className="btn btn-load bg-primary" disabled={props.disable} onClick={() => {
                onClick();
                console.log("clicked")
            }}>{text}</button>

        </div>

    )
}

export default LoadButton