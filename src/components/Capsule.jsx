import React from "react"

function Capsule(props) {

    if (props.text) {
        return (<div className={`capsule ${props.colour}`} >
            <p className="capsule-text">{props.text}</p>
        </div >)
    }
    else {
        return
    }

}

export default Capsule