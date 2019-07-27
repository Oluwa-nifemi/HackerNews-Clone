import React from 'react'
import Nav from '../nav/Nav'
import ArticleDetails from '../article-details/ArticleDetails'
import { getTop, getNew } from '../../api/api'
import Loading from '../Loading'

const getArticles = (mode) => mode === 'top' ? getTop() : getNew()

export default class Articles extends React.Component{    
    state = {
        articles: []
    }

    componentWillMount(){
        const mode = this.props.match.params.mode || 'top'
        getArticles(mode)
        .then(articles => this.setState({articles}))
    }

    componentWillReceiveProps(nextProps){
        const mode = this.props.match.params.mode || 'top'
        const nextMode = nextProps.match.params.mode || 'top'
        if(mode !== nextMode){
            this.setState({articles: []})
            getArticles(nextMode)
            .then(articles => this.setState({articles}))
        }
    }

    render(){
        if(this.state.articles.length !== 0){
            return (
                <React.Fragment>
                    <Nav/>
                    {this.state.articles.map(({ title, by, time, kids, id, url }) => {
                        return <ArticleDetails title={title} author={by} date={time} comments={kids} id={id} key={id} url={url}/>
                    })}
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