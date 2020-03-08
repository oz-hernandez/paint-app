import React from 'react';
import ToolPanel from './UI/ToolPanel'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <DrawGrid> */}
      
      { /* until we have the drawgrid use div main-grid*/ }
      <div className="main-grid"></div>
      
      <ToolPanel />
      {/* <Colors /> */}
    </div>
  );
}

export default App;
