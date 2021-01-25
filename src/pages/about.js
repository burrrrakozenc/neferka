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
              {/* <div style={{
                  width: '50%',
                  display: 'flex',
                  top: '0',
                  bottom:'0',
                  left:'0',
                  right:'0',
                  paddingLeft: '20rem',
                  paddingBottom:'7rem'
                }}>
                <div>
                  <div>
                    <h2><b>
                      NEFERKA
                  </b></h2>
                    <p>
                      "Neferka" comes from the words beautiful (Nefer) & life force (Ka) in ancient Egyptian language. Each piece is a poetic combination glamor of metals and embodiment of a geometric order.
                      </p><p>
                      Neferka's elemental value is to carry the owner's consciousness to the present when wearing, touching, looking or using the pieces. Re-tuning our minds to 'here' and 'now', our experiences become significantly more attentive.
                      </p><p>
                      Pieces are based on scientific, philosophical and spiritual inheritances of different cultures. With a different idea nesting in their souls, they share Neferka's core value of appreciation of the present and seeing the poetry of the story that we are a part of.
                      </p><p>
                      The concepts are materialized with unique craftsmanship skills, by representers of hundreds of years old Armenian jewelry making traditions in Grand Bazaar, Istanbul.
                  </p>
                  </div>
                  <div>
                    <h2><b>
                      DESIGNER
                  </b></h2>
                    <p>
                      Eli Bensusan aims to create poetic instants with objects that tell stories. Jewelry is one of many fields that he is interested in.
                      </p><p>
                      He believes stories create an awareness of the existing connections and relations between souls, leading to a healthier way of coming together as human beings.
                      </p><p>
                      Alongside his design practice he enjoys improving his poetry performance, photography and cooking skills.
                      </p><p>
                      Simply reach him from eli@neferka.design.
                  </p>
                  </div>
                  <div>
                    <h2><b>
                      GOLDSMITH
                  </b></h2>
                    <p>
                      Aret Çolakyan, Neferka's goldsmith who made countless pieces for famous brands and individuals in Turkey. He stepped into Grand Bazaar when he was 12 as an apprentice. He practiced secrets of this craft learning from his masters.
                  </p>
                  </div>
                  <div>
                    <h2><b>
                      FINISHING
                  </b></h2>
                    <p>
                      Nuran 'Boncuk' Karagöz is one of the most well known finishing masters of the Grand Bazaar. He started as an apprentice when he was 13 years old, and today he is known as one of the best finishing masters of the area.
                  </p>
                  </div>
                  <div>
                    <h2><b>
                      SPECIAL THANKS
                  </b></h2>
                    <p>
                    &nbsp; &nbsp; &nbsp;Bensusan Family
                      </p><p>
                      &nbsp; &nbsp; &nbsp;Suat Eman & Kushala Vora for photography
                      </p><p>
                      &nbsp; &nbsp; &nbsp; & Nurhan Yapıcı for the wine
                      </p><p>
                      &nbsp; &nbsp; &nbsp;Eylül Cavaç for modeling
                  </p>
                  </div>
                </div>
              </div> */}
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
                alignItems:'center'
              }}>
                <div>
                  <img className={aboutStyle.img2} src={ab.image1.fluid.src} alt={ab.id} />
                </div>
                <div className={aboutStyle}>
                  <img className={aboutStyle.img2} src={ab.image2.fluid.src} alt={ab.id} />
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
