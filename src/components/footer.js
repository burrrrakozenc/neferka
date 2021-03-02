import React from 'react'
import footerStyle from './styles/footer.module.css'
import '../utils/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div>
            <footer className={footerStyle.footer}>
                <a className={footerStyle.icons} href='https://www.instagram.com/neferka_design/'>
                    <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        title='github account for deSolidState' />
                </a>
                <span style={{fontSize:'3rem'}}>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                <a className={footerStyle.icons} href='https://www.facebook.com/neferkadesign/'>
                    <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        title='github account for deSolidState' />
                </a>
            </footer>
        </div>

    )
}



export default Footer