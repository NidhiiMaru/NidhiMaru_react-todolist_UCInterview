import React from 'react'
import Prototypes from 'prop-types'
import {Link} from "react-router-dom";
export default function Header(props) { //props is obj from parent comp given by javascript
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link" to="/about"> About</Link>
          </li>
          
          
        </ul>
     { props.searchBar?  <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>: ""}
      </div>
    </div>
  </nav>
  )
}
Header.defaultProps={
  title: "Your Title Here",
  searchBar:true
}

Header.propTypes={
  title: Prototypes.string,
  searchBar: Prototypes.bool.isRequired
}