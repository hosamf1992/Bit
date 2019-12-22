import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo/logo.png'
export default function Header() {
    
    return (

        <section className="nav-header">
            <Link to="/">Mr.BitCoin</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/signup">Signup</Link>
            {/* <Link to="/statistic">Profile</Link> */}


        </section>
    )
}
