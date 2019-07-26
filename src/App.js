import React from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import AuthorDetails from './components/author-details/AuthorDetails'
import ArticleDetails from './components/article-details/ArticleDetails'
import Comment from './components/comment/Comment'

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      {/* <AuthorDetails author="sohkyamung" date="9/9/2014, 4:37 AM" karma={23485}/> */}
      {/* <ArticleDetails title="The art of dancing" author="sohkyamung" date="9/9/2014, 4:37 AM" comments={4}/> */}
      <Comment 
        author="sohkyamung" 
        comment="This is really good and motivating. Thank you.This is really good and motivating. Thank you.This is really good and motivating. Thank you.This is really good and motivating. Thank you.This is really good and motivating. Thank you.This is really good and motivating. Thank you.This is really good and motivating. Thank you.This is really good and motivating. Thank you.This is really good and motivating." 
        date="9/9/2014, 4:37 AM" 
      />
    </div>
  );
}

export default App;
