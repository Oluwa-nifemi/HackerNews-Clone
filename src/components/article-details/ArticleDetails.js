import React from 'react'
import './article-details.css'
import PropTypes from 'prop-types'

export default function ArticleDetails({ title, author, date, comments, large = false }){
    return (
        <div className="article">
            <p className={`article__name ${large ? 'large' : ''}`}>{ title }</p>
            <p className="article__details">
                by <a href="#" className="underline">{ author }</a> on { date } with <a href="#" className="underline">{ comments }</a> comments
            </p>
        </div>
    )
}

ArticleDetails.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    large: PropTypes.bool
}