import React from 'react'
import Nav from '../nav/Nav'
import Comment from '../comment/Comment'
import ArticleDetails from '../article-details/ArticleDetails'
import { getArticle } from '../../api/api'
import Loading from '../Loading'

export default class Comments extends React.Component{
    state = {
        article: null,
        comments: [],
        error: null
    }

    componentDidMount(){
        getArticle(this.props.match.params.id)
        .then(res => this.setState(res))
    }

    render(){
        const { article, error } = this.state

        if(article){
            const { title, by:author, time:date, kids:comments, url,id } = article            
            return (
                <React.Fragment>
                    <Nav/>
                    <ArticleDetails title={title} author={author} date={date} comments={comments} large={true} url={url} id={id} />
                    {
                        this.state.comments.map(({ by:author, time:date, text:comment,id }) => (
                            <Comment 
                                author={author}
                                date={date}
                                comment={comment}
                                key={id}
                            />
                        ))
                    }
                </React.Fragment>
            )    
        }else if(!error){
            return (
                <React.Fragment>
                    <Nav/>
                    <Loading />
                </React.Fragment>                    
            )
        }else{
            return (
                <React.Fragment>
                    <Nav/>
                    <h1>{error}</h1>
                </React.Fragment>                    
            )
        }

    }
}