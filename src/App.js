import React from 'react';
import './App.css';
import Author from './components/author/Author'
import Articles from './components/articles/Articles'
import Comments from './components/comments/Comments'

function App() {
  return (
    <div className="App">
      <Comments id={20538614} />
    </div>
  );
}

export default App;
