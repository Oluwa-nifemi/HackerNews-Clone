import React from 'react'
import '../../fonts.css'
import './nav.css'
import { NavLink } from 'react-router-dom'

export default function Nav(){
    return (
        <nav>
            <div className="nav-links">
                <NavLink 
                    className="nav-link nav-link--active" 
                    to="/articles/top"
                    activeStyle={{
                        color: 'rgb(200, 5, 5)'
                    }}
                >
                    Top
                </NavLink>
                <NavLink 
                    className="nav-link" 
                    to="/articles/new"
                    activeStyle={{
                        color: 'rgb(200, 5, 5)'
                    }}
                >
                    New
                </NavLink>
            </div>
            {/* <button className="nav__theme-btn">
                <span role="img" aria-label="emoji">🔦</span>
            </button> */}
        </nav>
    )
}