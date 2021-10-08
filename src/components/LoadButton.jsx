import React from 'react'

function LoadButton(props) {

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