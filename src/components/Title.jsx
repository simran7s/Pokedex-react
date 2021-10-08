import React from "react"

function Title() {

    function onClick() {
        window.location.reload()
    }


    return (
        <header className="bg-primary text-center text-light">
            <div className="title-box" onClick={onClick}>
                <img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" alt="" />
                <h1 className="title">Pokedex</h1>
                <img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" alt="" />
            </div>

        </header>
    )
}

export default Title