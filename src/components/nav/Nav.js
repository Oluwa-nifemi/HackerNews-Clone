import React from 'react'
import '../../fonts.css'
import './nav.css'

export default function Nav(){
    return (
        <nav>
            <div className="nav-links">
                <a className="nav-link nav-link--active" href="#">
                    Top
                </a>
                <a className="nav-link" href="#">
                    New
                </a>
            </div>
            <button className="nav__theme-btn">
                🔦
            </button>
        </nav>
    )
}