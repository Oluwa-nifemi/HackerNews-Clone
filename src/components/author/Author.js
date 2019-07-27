import React from 'react'
import Nav from '../nav/Nav'
import AuthorDetails from '../author-details/AuthorDetails'
import ArticleDetails from '../article-details/ArticleDetails'
import './author.css'
import { getUserDetails } from '../../api/api';

export default class Author extends React.Component{
    
    state = {
        author: null,
        date: null,
        karma: null,
        articles: []
    }

    static defaultProps = {
        author: "rchaudhary"
    }
    
    componentDidMount(){
        getUserDetails(this.props.author)
        .then(({ id, created, karma, articles}) => {
            this.setState({
                author: id,
                date: created,
                karma,
                articles
            })
        })
    }
    
    render(){
        return (
            <React.Fragment>
                <Nav />
                <AuthorDetails author={this.state.author} date={this.state.date} karma={this.state.karma}/>
                <p className="header">
                    Posts
                </p>
                {this.state.articles.map(({ title, by, time, kids, id, url }) => {
                    return <ArticleDetails title={title} author={by} date={time} comments={kids} key={id} url={url}/>
                })}
            </React.Fragment>

        )
    }
}