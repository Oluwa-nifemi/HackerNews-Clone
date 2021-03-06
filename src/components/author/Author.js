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
        articles: [],
        error: null
    }

    componentDidMount(){
        getUserDetails(this.props.match.params.id)
        .then(({ id, created, karma, articles, error}) => {
            this.setState({
                author: id,
                date: created,
                karma,
                articles,
                error
            })
        })
    }
    
    render(){
        const { author, date, karma, articles, error } = this.state
        if(author){
            return (
                <React.Fragment>
                    <Nav />
                    <AuthorDetails author={author} date={date} karma={karma}/>
                    <p className="header">
                        Posts
                    </p>
                    {articles.map(({ title, by, time, kids, id, url }) => {
                        return <ArticleDetails title={title} author={by} date={time} comments={kids} id={id} key={id} url={url}/>
                    })}
                </React.Fragment>
            )
        }else if(!error){
            return (
                <React.Fragment>
                    <Nav/>
                    <Loading/>
                </React.Fragment>
            )
        }else{
            return (
                <React.Fragment>
                    <Nav/>
                    <h1>This user does not exist</h1>
                </React.Fragment>
            )
        }
    }
}