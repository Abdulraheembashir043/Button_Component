import React from 'react';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <h3><span>Dev</span>challenges.io</h3>
      <p className='nav-text color'>Colors</p>
      <p className='nav-text typography'>Typography</p>
      <p className='nav-text spaces'>Spaces</p>
      <p className='nav-text buttons'>Buttons</p>
      <p className='nav-text inputs'>Inputs</p>
      <p className='nav-text grid'>Grid</p>
    </nav>
  );
}

export default NavBar;
