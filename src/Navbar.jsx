import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Link to="/counter">Counter</Link>
      <Link to="/clock">Clock</Link>
    </nav>
  );
};

export default Navbar;