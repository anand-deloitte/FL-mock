import React from 'react';
import { Link } from 'react-router-dom';

function RedPage() {

  return (
    <div style={{ background: 'red', color: 'white', padding: '20px' }}>
      <h1>This is Red Page</h1>

      <Link to="/"> 
        <button>Home</button>
      </Link>
    </div>
  );
}

export default RedPage;
