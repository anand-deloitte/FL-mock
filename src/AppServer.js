import React from 'react';

const AppServer = () => {
  return (
    <div>
      <h1>Hello from Server-Side Rendered React App!</h1>
      <button onClick={()=>console.log('Test')}>Test</button>
    </div>
  );
};

export default AppServer;