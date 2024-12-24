import React, { useState } from 'react';
import Visualizer from './Visualizer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Sort Visualizer</h1>
      </div>
      <Visualizer />
    </div>
  );
};

export default App;
