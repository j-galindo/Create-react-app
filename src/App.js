import React from 'react';
import ReactPlayer from "react-player";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import User from './components/User'

function App() {
  return (
    <div className="App">
       <User firstName="Harper"/>
       <User firstName="Ana"/>
       <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
       <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />
       <Header/>
      
    </div>
  );
}

export default App;
