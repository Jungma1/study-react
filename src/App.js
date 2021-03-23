import React from 'react';
import { Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
    </div>
  );
};

export default App;
