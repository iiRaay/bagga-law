import React from 'react'
import { Router, NavLink } from 'react-router-dom'
import './style.scss'

const CetagorySidebar = ({ className, title }) => {
    return (
        <div className={className}>
            <h3 className="sidebarTitle">{title}</h3>
            <ul>
                <li><NavLink exact to='/practice-details' state={{ id: 1}}>Criminal Law</NavLink></li>
                <li><NavLink exact to='/practice-details' state={{ id: 2}}>Personal Injury</NavLink></li>
                <li><NavLink exact to='/practice-details' state={{ id: 3}}>Family Law</NavLink></li>
                <li><NavLink exact to='/practice-details' state={{ id: 4}}>Immigration Law</NavLink></li>
                <li><NavLink exact to='/practice-details' state={{ id: 5}}>Real Estate Law</NavLink></li>
                <li><NavLink exact to='/practice-details' state={{ id: 6}}>Business Law</NavLink></li>
            </ul>
        </div>
    )
}
export default CetagorySidebar