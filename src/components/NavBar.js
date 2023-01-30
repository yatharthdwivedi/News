// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/about'>Contact</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><Link className="dropdown-item" data-bs-target="#navbarSupportedContent" to="/general">general (default)</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/business">business</Link></li>
                        <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                        <li><Link className="dropdown-item" to="/health">health</Link></li>
                        <li><Link className="dropdown-item" to="/science">science</Link></li>
                        <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                        <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                        
                        
                    </ul>
                    </li>
                    
                </ul>
                {/* you can add this search if you wont */}

                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>

      </div>
    )
  }
}
