import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Change Appearance
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><button className="dropdown-item" href="/">Light Mode</button></li>
                            <li><button className="dropdown-item" href="/">Dark Mode</button></li>
                            <li><button className="dropdown-item" href="/">Navy Blue</button></li>
                            <li><button className="dropdown-item" href="/">Forest Green</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    aboutLink: PropTypes.string
}
Navbar.defaultProps = {
    title: "Title goes here",
    aboutText: `About`,
    aboutLink: "About Link goes here",
}