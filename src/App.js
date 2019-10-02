import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import User from './components/User'

function App() {
  return (
    <div className="App">
       <User firstName="Harper"/>
       <User firstName="Ana"/>
       <Header/>
      
    </div>
  );
}

export default App;
