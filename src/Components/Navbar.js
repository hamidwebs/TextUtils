import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={props.aboutLink}>{props.aboutText}</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="modeSwitch" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="modeSwitch">{props.mode === 'light' ? 'Enable ' : 'Disable '}Dark Mode</label>
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