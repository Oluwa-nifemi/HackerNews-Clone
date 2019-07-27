import React from 'react'
import PropTypes from 'prop-types'
import './comment.css'

export default function Comment({ author, comment, date  }){
    return (
        <div className="comment">
            <p className="comment__details">
                by <a href="#" className="underline">{ author }</a> on { date }
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
    date: PropTypes.string.isRequired,
};