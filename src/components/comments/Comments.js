import React from 'react'
import Nav from '../nav/Nav'
import Comment from '../comment/Comment'
import ArticleDetails from '../article-details/ArticleDetails'
import { getArticle } from '../../api/api'
import Loading from '../Loading'

export default class Comments extends React.Component{
    state = {
        article: null,
        comments: []
    }

    static defaultProps = {
        id: 20538614
    }

    componentDidMount(){
        getArticle(this.props.id)
        .then(res => this.setState(res))
    }

    render(){
        if(this.state.article){
            var { title, by:author, time:date, kids:comments } = this.state.article            
            return (
                <React.Fragment>
                    <Nav/>
                    <ArticleDetails title={title} author={author} date={date} comments={comments} large={true} />
                    {
                        this.state.comments.map(({ by:author, time:date, text:comment }) => (
                            <Comment 
                                author={author}
                                date={date}
                                comment={comment}
                            />
                        ))
                    }
                </React.Fragment>
            )    
        }else{
            return (
                <React.Fragment>
                    <Nav/>
                    <Loading />
                </React.Fragment>                    
            )
        }

    }
}