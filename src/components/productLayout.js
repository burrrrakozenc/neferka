import React from 'react'
import Header from '../components/header'
// import Footer from '../components/footer'

import { ParallaxProvider } from 'react-scroll-parallax'

import layoutStyle from './styles/layout.module.css'

const ProductLayout = (props) => {
    return (
        <div className={layoutStyle.container}>
            {/* <div className={layoutStyle.content}> */}
            <ParallaxProvider>
                <Header />
                {props.children}
            </ParallaxProvider>
        </div>
    )
}



export default ProductLayout