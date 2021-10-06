import React from 'react'

function Footer() {
    return (
        <footer className="bg-primary text-center text-light">
            <div className="title-box">
                <h2 className="footer">Created by Simran</h2>
                <h2 className="copyright">&copy; {new Date().getFullYear()}</h2>
            </div>

        </footer>
    )
}

export default Footer
