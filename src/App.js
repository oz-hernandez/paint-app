import React from 'react';
import DrawGrid from './UI/DrawGrid.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-grid">
        {/* <input type="color" name='color' /> */}
        <DrawGrid />
      </div>
    </div>
  );
}

export default App;
