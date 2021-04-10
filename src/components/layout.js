import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


import { ParallaxProvider } from 'react-scroll-parallax'

import layoutStyle from './styles/layout.module.css'

const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <Header />
            <ParallaxProvider>
                {props.children}
            </ParallaxProvider>

            <div className={layoutStyle.push}></div>
            <Footer />
        </div>

    )
}



export default Layout