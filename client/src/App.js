import React from 'react';
import navbar from './components/layout/navbar';
import footer from './components/layout/footer';
import landing from './components/layout/landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar/>
      <landing/>
      <footer/>
     
    </div>
  );
}

export default App;
