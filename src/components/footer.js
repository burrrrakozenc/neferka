import React from 'react'
// import { Link } from 'gatsby'
// import Footer from '../components/footer'

import footerStyle from './styles/footer.module.css'

const Footer = () => {
    return (
        <div>
            {/* <div className={footerStyle.push}></div> */}
            <footer className={footerStyle.footer}>
                <a style={{color:'inherit'}} target="_blank" rel="noreferrer" href="https://www.instagram.com/neferka_design/">
                INSTAGRAM
                </a>
                <span style={{textDecoration: 'none'}}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
                {/* <p style={{textDecoration: 'none', }}></p> */}
                <a style={{color:'inherit'}} target="_blank" rel="noreferrer" href="https://www.facebook.com/neferkadesign">
                    FACEBOOK
                </a>
            </footer>
        </div>

    )
}



export default Footer