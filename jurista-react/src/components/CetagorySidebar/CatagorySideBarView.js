import React from 'react'
import { Router, NavLink } from 'react-router-dom'
import './CatagorySideBarStyle.scss'

const CetagorySidebarView = ({ className, title }) => {
    return (
        <div className={className}>
            <h3 className="sidebarTitle">{title}</h3>
            <ul>
                <li><NavLink exact to='/frequently-asked'>FAQ</NavLink></li>
                <li><NavLink exact to='/practice-details/1'>Criminal Law</NavLink></li>
                <li><NavLink exact to='/practice-details/2'>Personal Injury</NavLink></li>
                <li><NavLink exact to='/practice-details/3'>Family Law</NavLink></li>
                <li><NavLink exact to='/practice-details/4'>Immigration Law</NavLink></li>
                <li><NavLink exact to='/practice-details/5'>Real Estate Law</NavLink></li>
                <li><NavLink exact to='/practice-details/6'>Business Law</NavLink></li>
            </ul>
        </div>
    )
}
export default CetagorySidebarView