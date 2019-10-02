import React, { Component } from 'react'
import Title from './Title';
import Description from './Description';
import logo from '../logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div>
        
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Description data="You are ready to take this to the next level!"></Description>
        <Title data="Welcome to React, Ironhacker!"></Title>

       
       
      </header>
      </div>
    )
  }
}
