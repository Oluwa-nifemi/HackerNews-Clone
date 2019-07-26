import React from 'react'
import './author-details.css'
import PropTypes from 'prop-types'

export default function AuthorDetails({ author,date,karma }){
    return (
        <div className="author">
            <p className="author__name">
                {author}
            </p>
            <p className="author__details">
                joined <span className="bold">{date}</span> and has <span className="bold">{karma}</span> karma
            </p>
        </div>
    )
}

AuthorDetails.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    karma: PropTypes.number.isRequired
}