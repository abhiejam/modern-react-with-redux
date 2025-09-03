import React from 'react';
import Link from './Link';

function Sidebar() {
  return (
    <div className='flex flex-column'>
      <Link to="/dropdown">Dropdown</Link>
      <Link to="/table">Table</Link>
    </div>
  )
}

export default Sidebar
