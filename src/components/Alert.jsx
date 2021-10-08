import React from 'react'

function Alert(props) {

    function onClick() {
        // document.querySelector(".alert").remove()
        props.setErrorMessage("")
    }

    return (
        <div className="alert">
            <i className="far fa-times-circle closebtn" onClick={() => {
                onClick()
            }}></i>
            {props.errorMessage}
        </div>
    )
}

export default Alert
