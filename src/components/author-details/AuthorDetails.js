import React from 'react'
import './author-details.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function AuthorDetails({ author,date,karma }){
    return (
        <div className="author">
            <Link className="author__name" to={`/author/${author}`}>
                {author}
            </Link>
            <p className="author__details">
                joined <span className="bold">{processDate(new Date(date))}</span> and has <span className="bold">{karma}</span> karma
            </p>
        </div>
    )
}

const processDate = (date) => `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`

AuthorDetails.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    karma: PropTypes.number.isRequired
}