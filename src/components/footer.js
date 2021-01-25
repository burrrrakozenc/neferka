import React from 'react'
import footerStyle from './styles/footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={footerStyle.footer}>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/neferka_design/">
                INSTAGRAM
                </a>
                <span className={footerStyle.footerSpan}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/neferkadesign">
                    FACEBOOK
                </a>
            </footer>
        </div>

    )
}



export default Footer