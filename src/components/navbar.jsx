import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary m-2"> {props.totalCounter} </span>
                </a>
        </nav> 
    )
}

export default Navbar


