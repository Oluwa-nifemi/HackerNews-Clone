import React from 'react'
import PropTypes from 'prop-types'
import './comment.css'
import { Link } from 'react-router-dom'

export default function Comment({ author, comment, date  }){
    return (
        <div className="comment">
            <p className="comment__details">
                <span>by </span>
                <Link className="underline" to={`/author/${author}`}>
                    {author}
                </Link>
                <span> on {processDate(new Date(date))}</span>
            </p>
            <p className="comment__text" dangerouslySetInnerHTML={{
                __html: comment
            }}>
            </p>
        </div>
    )
}

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
};

const processDate = (date) => `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`