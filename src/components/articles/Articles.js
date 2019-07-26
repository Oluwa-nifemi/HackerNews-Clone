import React from 'react'
import Nav from '../nav/Nav'
import ArticleDetails from '../article-details/ArticleDetails'
import { getTop, getNew } from '../../api/api'

export default class Articles extends React.Component{    
    state = {
        articles: []
    }

    static defaultProps = {
        mode: 'top'
    }

    componentWillMount(){
        if(this.props.mode === 'top'){
            getTop()
            .then(articles => {
                this.setState({articles})
            })
        }else{
            getNew()
            .then(articles => {
                this.setState({articles})
            })
        }
        
    }

    render(){
        return (
            <React.Fragment>
                <Nav/>
                {this.state.articles.map(({ title, by, time, kids, id, url }) => {
                    return <ArticleDetails title={title} author={by} date={time} comments={kids} key={id} url={url}/>
                })}
            </React.Fragment>
        )
    }
}