import React from 'react'
import Nav from '../nav/Nav'
import ArticleDetails from '../article-details/ArticleDetails'

export default class Articles extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Nav/>
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