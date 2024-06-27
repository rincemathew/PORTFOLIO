

import React from 'react'

function Header() {
  return (
    <header class="header" data-header>
    <div class="container">

      <h1 class="h1 logo">
        <a href="#">Rince Mathew<span>.</span></a>
      </h1>

      <div class="navbar-actions">

      

      </div>

      <button class="nav-toggle-btn" aria-label="Toggle Menu" title="Toggle Menu" data-nav-toggle-btn>
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
      </button>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li>
            <a href="#home" class="navbar-link">Home.</a>
          </li>

          <li>
            <a href="#about" class="navbar-link">About.</a>
          </li>

          <li>
            <a href="#skills" class="navbar-link">Skills.</a>
          </li>

          <li>
            <a href="#portfolio" class="navbar-link">My Projects.</a>
          </li>

          <li>
            <a href="#contact" class="navbar-link">Contact.</a>
          </li>

        </ul>
      </nav>

    </div>
  </header>
  )
}

export default Header