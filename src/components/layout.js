import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'gatsby'


import { ParallaxProvider } from 'react-scroll-parallax'

import layoutStyle from './styles/layout.module.css'

const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <Header />
            {/* <Link className='icons' to='https://myfavcoffeeplace.io'>
                <FontAwesomeIcon icon={'facebook-square'} />
            </Link> */}
            <ParallaxProvider>
                {/* <RouteAnnouncement /> */}
                {props.children}
            </ParallaxProvider>

            <div className={layoutStyle.push}></div>
            <Footer />
        </div>

    )
}



export default Layout