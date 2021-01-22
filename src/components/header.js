import { Link } from 'gatsby'
import React from 'react'
import Logo from '../images/Amblem.png'


import headerStyle from './styles/header.module.css'

const Header = () => {
    return (
        <header className={headerStyle.header}>
            {/* <div className={headerStyle.headerDiv}> */}
                <img src={Logo} className={headerStyle.logo} alt="Neferka" />
                <nav>
                    <ul className={headerStyle.navList}>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Home</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/stories">Stories</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/solaria">Solaria</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/dervish">Dervish</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/fibonacci">Fibonacci</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/illusions">Illusions</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/equilibrium">Equilibrium</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/about">About</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            {/* </div> */}
        </header>
    )
}

export default Header