import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

//   window.onbeforeunload = function() {
//     localStorage.clear();
//  }
const clear = () =>{
  localStorage.clear();
  console.log("Clear localStorage",localStorage);
}
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tornedo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">      
        <NavLink className="nav-link" to='/' >Home</NavLink>
        <NavLink className="nav-link" to='/login' >Login</NavLink>
        <NavLink className="nav-link" to='/blogs'>Blogs</NavLink>
        <NavLink className="nav-link" to='/textform'>Textform</NavLink>
        <NavLink className="nav-link" to='/search-engine'>Search</NavLink>
        <NavLink className="nav-link" to='/datatable'>Datatable</NavLink>
        <NavLink className="nav-link" to='/filter-page'>Filter</NavLink>
        <NavLink className="nav-link" to='/theme'>Theme</NavLink>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="nav-link" to='/contact/sneh'>Sneh</NavLink>
          <NavLink className="nav-link" to='/contact/ratnesh'>Ratnesh</NavLink>
          </ul>
        </li> 




         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/A">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/B">Another action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/C">Something else here</NavLink></li>
            <li><NavLink className="dropdown-item" to="/D">Nothing</NavLink></li>
          </ul>
        </li> 
        <button><NavLink className="nav-link " to='/close' onClick={clear} >close</NavLink></button>
      </div>
    </div>
  </div>
</nav> 
        </>
    );
}

export default Navbar;
