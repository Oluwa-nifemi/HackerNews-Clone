import React from 'react'
import Nav from '../nav/Nav'
import AuthorDetails from '../author-details/AuthorDetails'
import ArticleDetails from '../article-details/ArticleDetails'
import './author.css'
import { getUserDetails } from '../../api/api';
import Loading from '../Loading'

export default class Author extends React.Component{
    
    state = {
        author: null,
        date: null,
        karma: null,
        articles: []
    }

    componentDidMount(){
        getUserDetails(this.props.match.params.id)
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
        if(this.state.author){
            return (
                <React.Fragment>
                    <Nav />
                    <AuthorDetails author={this.state.author} date={this.state.date} karma={this.state.karma}/>
                    <p className="header">
                        Posts
                    </p>
                    {this.state.articles.map(({ title, by, time, kids, id, url }) => {
                        return <ArticleDetails title={title} author={by} date={time} comments={kids} id={id} key={id} url={url}/>
                    })}
                    {/* <AuthorDetails author={this.state.author} date={this.state.date} karma={this.state.karma}/>
                    <p className="header">
                        Posts
                    </p>
                    {this.state.articles.map(({ title, by, time, kids, id, url }) => {
                        return <ArticleDetails title={title} author={by} date={time} comments={kids} id={id} key={id} url={url}/>
                    })} */}
                </React.Fragment>
            )
        }else{
            return (
                <React.Fragment>
                    <Nav/>
                    <Loading/>
                </React.Fragment>
            )
        }
    }
}