import React from 'react';
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <header class="header">
        <a href="/" class="logo">Parteek.</a>
        <div class="bx bx-menu" id ="menu-icon"></div>
    <nav class="Navbar">
        <a href='/'>Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/education">Education</a>
        <a href="/contact">Contact</a>
    </nav>
    </header>
    </>
  );
};

export default Navbar;
