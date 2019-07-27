import React from 'react';
import './App.css';
import Author from './components/author/Author'
import Articles from './components/articles/Articles'
import Comments from './components/comments/Comments'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Articles}/>
        <Route path="/articles/:mode" component={Articles}/>
        <Route path="/comments/:id" component={Comments}/>
        <Route path="/author/:id" component={Author}/>
      </Router>

    </div>
  );
}

export default App;
