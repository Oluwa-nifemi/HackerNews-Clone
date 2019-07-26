import React from 'react'
import Nav from '../nav/Nav'
import AuthorDetails from '../author-details/AuthorDetails'
import ArticleDetails from '../article-details/ArticleDetails'
import './author.css'

export default class Author extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Nav />
                <AuthorDetails author="sohkyamung" date="9/9/2014, 4:37 AM" karma={23485}/>
                <p className="header">
                    Posts
                </p>
                <ArticleDetails title="The art of dancing" author="sohkyamung" date="9/9/2014, 4:37 AM" comments={4}/>
                <ArticleDetails title="The art of dancing" author="sohkyamung" date="9/9/2014, 4:37 AM" comments={4}/>
                <ArticleDetails title="The art of dancing" author="sohkyamung" date="9/9/2014, 4:37 AM" comments={4}/>
                <ArticleDetails title="The art of dancing" author="sohkyamung" date="9/9/2014, 4:37 AM" comments={4}/>
                <ArticleDetails title="The art of dancing" author="sohkyamung" date="9/9/2014, 4:37 AM" comments={4}/>
                <ArticleDetails title="The art of dancing" author="sohkyamung" date="9/9/2014, 4:37 AM" comments={4}/>
            </React.Fragment>

        )
    }
}