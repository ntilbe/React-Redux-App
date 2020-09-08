import React from 'react';

import Jokes from './components/Jokes'
import Favorites from './components/Favorites'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jokester 😂</h1>
      </header>
      <div className='container'>

      <div className='box'>
      <Jokes />
    </div>
    <div className = 'box'>
      <Favorites/>
    </div>
      </div>
    </div>
  );
}

export default App;