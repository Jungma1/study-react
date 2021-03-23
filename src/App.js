import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
			<ul>
				<li>
					<Link to='/'>홈</Link>
				</li>
				<li>
					<Link to='/about'>소개</Link>
				</li>
			</ul>
			<hr />
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
    </div>
  );
};

export default App;
