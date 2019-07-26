import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import AuthorDetails from './components/author-details/AuthorDetails'

function App() {
  return (
    <div className="App">
      <Nav/>
      <AuthorDetails author="sohkyamung" date="9/9/2014, 4:37 AM" karma={23485}/>
    </div>
  );
}

export default App;
