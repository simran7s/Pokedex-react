import React, { useState } from "react"

function SearchBar(props) {
    const [input, setInput] = useState("")

    function onChange(e) {
        setInput(e.target.value)
        console.log(e.target.value)
    }


    return (
        <div>
            <form className="searchBar mg-auto">
                <div className="searchBar-border">
                    <input
                        type="text"
                        placeholder="Search for a Pokemon"
                        className="searchBar-input"
                        onChange={(event) => {
                            onChange(event)
                        }}
                        value={input}
                    />


                    <button type="submit" className="searchBar-btn" onClick={(e) => {
                        props.onClick(input)
                        e.preventDefault()
                    }

                    }


                        onSubmit={
                            (e) => {
                                e.preventDefault()
                            }
                        }
                    ><i className="fas fa-search fa-1x"></i></button>
                </div>
            </form >
        </div >
    )
}

export default SearchBar