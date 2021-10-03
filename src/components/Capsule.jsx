import React from "react"

function Capsule(props) {
    return (
        <div className="capsule">
            <p className="capsule-text">{props.text}</p>
        </div>
    )
}

export default Capsule