import React from "react"

function SearchBar() {
    return (< div className="container" >
        <form className="searchBar mg-auto">
            <div className="searchBar-border">
                <input type="text" placeholder="Search for a Pokemon" className="searchBar-input " />
                <button type="submit" className="searchBar-btn"><i className="fas fa-search fa-1x"></i></button>
            </div>
        </form>
    </ div >)
}

export default SearchBar