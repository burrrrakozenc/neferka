import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import aboutStyle from '../components/styles/about.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const About = ({ data }) => {

  const { allContentfulAbout: { nodes: about },
  } = data

  return (
    <Layout>
      <section>
        {about.map((ab) => {
          return (
            <body className={aboutStyle.aboutBody}>
              <div className={aboutStyle.aboutP}>
                {documentToReactComponents(JSON.parse(ab.aboutMainText.raw))}
              </div>
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div className={aboutStyle.aboutImages}>
                  <div>
                    <img className={aboutStyle.img2} src={ab.image1.fluid.src} alt={ab.id} />
                  </div>
                  <div className={aboutStyle}>
                    <img className={aboutStyle.img2} src={ab.image2.fluid.src} alt={ab.id} />
                  </div>
                </div>
              </div>
            </body>
          )
        })}
      </section>
    </Layout>
  )
}



export const query = graphql`
  {
    allContentfulAbout {
        nodes {
          title
          slug
          image2 {
            fluid {
              src
            }
          }
          image1 {
            fluid {
              src
            }
          }
          id
          aboutMainText {
            raw
          }
        }
      }
  }
  `

export default About
