import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import '../Styles/NavBar.css'
import logo from "../img/logo.png";

export function NavBar() {
  return (
    <div>
  <div className = 'NavBar'>
    <div>
        <img className="logo" src={logo} alt="logo" />

      </div>
      <div>
    <Link className='link' to='/'>Home</Link>
    <Link className='link' to='/characters'>Characters</Link>
    <Link className='link' to='/episodes'>Episodes</Link>
    </div>
  </div>
  <section>
      <Outlet/>
    </section>
  </div>
  );
}
