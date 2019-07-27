import React from 'react'
import './article-details.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function ArticleDetails({ title, author, date, comments = [], large = false, url, id }){
    return (
        <div className="article">
            <a href={url} target="_blank" rel="noopener noreferrer" className={`article__name ${large ? 'large' : ''}`}>{ title }</a>
            <p className="article__details">
                <span>by </span>
                <Link className="underline" to={`/author/${author}`}>
                    {author}
                </Link>
                <span> on { processDate(new Date(date)) } with </span>
                <Link to={`/comments/${id}`} className="underline">
                    {comments.length}
                </Link>
                <span> comments</span>
            </p>
        </div>
    )
}

const processDate = (date) => `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`

ArticleDetails.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    comments: PropTypes.array,
    large: PropTypes.bool,
    id: PropTypes.number.isRequired
}