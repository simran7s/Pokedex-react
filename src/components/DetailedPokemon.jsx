import React from 'react'

function DetailedPokemon(props) {
    const { name, id, img, weight, height, data } = props

    console.log(data)

    return (
        // <div className="detailed-pokemon">
        //     <h1>{name}</h1>
        //     <div className="image-container">
        //         <img className="pokemon-image" src={data.sprites.front_default} alt={data.name} />
        //     </div>

        // </div>
        <div className="grid-container">
            <div className={`pokemon-card green`} id={data.name} >
                <div className="pokemon-container text-light">
                    <div className="card-top-info">
                        <p className="pokemon-index">{data.id}</p>
                        <p className={`pokemon-name`} >{data.name}</p>
                    </div>
                    <div className="image-container">
                        {/* <img className="pokemon-image" src={`${props.data.sprites.front_default}`} alt={data.name} /> */}
                    </div>
                    <div className="card-bottom-info">
                        <p>{data.weight}</p>
                        <p>{data.height}</p>
                        <p>{data.sprites.front_default}</p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default DetailedPokemon
