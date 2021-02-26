import React from 'react';

function App() {
  const name = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  return <>{name === 'React' && <h1 style={style}>React 입니다.</h1>}</>;
}

export default App;
