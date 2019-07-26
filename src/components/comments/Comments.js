import React from 'react'
import Nav from '../nav/Nav'
import Comment from '../comment/Comment'
import ArticleDetails from '../article-details/ArticleDetails'

export default class Comments extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Nav/>
                <ArticleDetails title="The art of dancing" author="sohkyamung" date="9/9/2014, 4:37 AM" comments={4} large={true} />
                <Comment 
                    author="sohkyamung"
                    date="9/9/2014, 4:37 AM"
                    comment="This is really good. I really needed this. Thank you"
                />
                <Comment 
                    author="sohkyamung"
                    date="9/9/2014, 4:37 AM"
                    comment="This is really good. I really needed this. Thank you"
                />
                <Comment 
                    author="sohkyamung"
                    date="9/9/2014, 4:37 AM"
                    comment="This is really good. I really needed this. Thank you"
                />
            </React.Fragment>
        )
    }
}