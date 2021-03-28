import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import contactStyle from '../components/styles/contact.module.css'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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

const Contact = ({ data }) => {
    const { allContentfulContactPage: { nodes: contact },
    } = data

    return (
        <Layout>
            <div className={contactStyle.row + ' ' + contactStyle.center}>
                {contact.map((item) => {
                    return (
                        <div className={contactStyle.col + ' ' + contactStyle.colspan3}>
                            <h3 style={{fontSize: '24px', fontWeight:'400'}}>
                                {item.title}
                                {/* {documentToReactComponents(JSON.parse(item.mainText.raw))} */}
                            </h3>
                            <p>
                                {documentToReactComponents(JSON.parse(item.mainText.raw))}
                            </p>
                        </div>
                    )
                })}
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
                            paddingLeft: '10px',
                            display: 'flex',
                            flexDirection:'row'
                        }}>
                            <div
                            style={{
                                paddingRight:'0.5rem'
                            }}
                            >
                                <Button type="submit">Send</Button>
                            </div>
                            <div>
                                <Button type="reset" value="Clear">Clear</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </Layout>
    )
}

export const query = graphql`
{
    allContentfulContactPage {
        nodes {
          title
          mainText {
            raw
          }
        }
      }
}
`

export default Contact

