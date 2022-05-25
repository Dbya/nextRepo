import React from 'react';
import './App.css';

import Total from './components/total/Total';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
