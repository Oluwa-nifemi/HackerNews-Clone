import React from 'react'
import './article-details.css'
import PropTypes from 'prop-types'

export default function ArticleDetails({ title, author, date, comments = [], large = false, url }){
    return (
        <div className="article">
            <a href={url} target="_blank" rel="noopener noreferrer" className={`article__name ${large ? 'large' : ''}`}>{ title }</a>
            <p className="article__details">
                by <a href="#" className="underline">{ author }</a> on { processDate(new Date(date)) } with <a href="#" className="underline">{comments.length}</a> comments
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
    large: PropTypes.bool
}