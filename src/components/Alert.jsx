import React from 'react'

function Alert(props) {

    function onClick() {
        // document.querySelector(".alert").remove()
        props.setErrorMessage("")
    }


    return (
        <div className="alert">
            <p>{props.errorMessage}</p>
            <i className="far fa-times-circle closebtn"
                onClick={() => { onClick() }}
            ></i>


        </div>
    )
}

export default Alert
