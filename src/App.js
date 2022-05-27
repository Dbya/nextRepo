import React from 'react';
import './App.css';

import Total from './components/total/Total';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Total />
      </BrowserRouter>
    </div>
  );
}

export default App;
