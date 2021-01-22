import React from 'react'
import Layout from '../components/layout'
import contactStyle from '../components/styles/contact.module.css'
import styled from 'styled-components'

const Button = styled.button`
min-width: 80px;
padding: 10px 32px;
border-radius: 4px;
border: none;
background: #141414;
color: #fff;
font-size: 12px;
cursor: pointer;
`

const Contact = () => {


    return (
        <Layout>
            <div className={contactStyle.row + ' ' + contactStyle.center}>
                <div className={contactStyle.col + ' ' + contactStyle.colspan3}>
                    <h3>Bir takim baslik</h3>
                    <p>lorem ipmsyn aksjdal ksdal ksjdalksjd lkasjd alsjdl asdlajsld nasld nalsdjalksdj anlsjd laksjd lasjd lakdj alksdj as aksjd akjsd ajksdh as asjdh aksjd ak ajksdh kajs  ajkhd aksj  akjshd kajhs ka</p>
                    <p>emayl</p>
                </div>
                <div className={contactStyle.col + ' ' + contactStyle.colspan3}>
                    <form action="https://getform.io/f/40d8cf91-cb65-4812-9be3-1f70f4de1d5b" method="POST">

                        <label>
                            Name
    <input type="text" name="name" id="name" />
                        </label>
                        <label>
                            Email
    <input type="email" name="email" id="email" />
                        </label>
                        <label>
                            Message
    <textarea name="message" id="message" rows="5" />
                        </label>
                        <div style={{
                            paddingLeft:'10px'
                        }}>
                            <Button type="submit">Send</Button>
                            <Button type="reset" value="Clear">Clear</Button>
                        </div>

                    </form>
                </div>
            </div>



        </Layout>
    )
}

export default Contact