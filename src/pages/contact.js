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
                    <p>
                        Thank  you for visiting Neferka's website. Please use the form on the right to ask any questions about Neferka products or purchasing including prices or requests for purchase.
                    </p>
                    <p>
                        Also, do not hesitate to contact for special inquiries,  material changes, different sizes in rings, plating options and other requests.
                    </p>
                    <p>Email: eli@neferka.design</p>
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
                            paddingLeft: '10px'
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