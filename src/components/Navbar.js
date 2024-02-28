import React from 'react';
import './navBarStyled.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar({ onSelectCategory }) {
  return (
    <div className='navBar'>
      <li><Link to="/">Inicio</Link></li>
      <li onClick={() => onSelectCategory('cremas')}><Link to="/cremas">Cremas</Link></li>
      <li onClick={() => onSelectCategory('maquillajes')}><Link to="/maquillajes">Maquillajes</Link></li>
      <li onClick={() => onSelectCategory('exfoliantes')}><Link to="/exfoliantes">Exfoliantes</Link></li>
      <CartWidget number={7} />
    </div>
  );
}

export default Navbar;