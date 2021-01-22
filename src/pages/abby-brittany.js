import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel';
import Image from 'gatsby-image'
import '../components/styles/story2/story2carousel.module.css'
import story2Style from '../components/styles/story2/story2.module.css'


const IndexPage = ({ data }) => {
  const { allContentfulStory2: { nodes: story },
  } = data

  return (
    <Layout>
      <section className={story2Style}>
        {story.map((stry) => {
          return (
            <body>
              <div className={story2Style.header}>
                <h1><b>{stry.title}</b></h1>
                <p>{stry.date}</p>
                <Image fluid={stry.headerImage.fluid} className={story2Style.headerImage} alt={stry.id} />
              </div>
              <div className={story2Style.mainBody}>
                <article key={stry.id}>
                  <section className={story2Style.section1}>
                    <p>
                      {stry.mainText1.mainText1}
                    </p>
                  </section>
                  <section className={story2Style.section2}>
                    <div className={story2Style.div1}>
                      <img className={story2Style.img1} src={stry.rightImage.fluid.src} alt={stry.id} />
                    </div>
                    <p>
                      {stry.mainText2.mainText2}
                    </p>
                  </section>
                  <section className={story2Style.section3}>
                    <div className={story2Style.div2}>
                      <img className={story2Style.img2} src={stry.leftImage.fluid.src} alt={stry.id} />
                    </div>
                    <p>
                      {stry.bottomText.bottomText}
                    </p>
                  </section>
                </article>
              </div>
              <div classNam={story2Style.carousel} style={{
                paddingTop: '8rem',
                paddingLeft: '10rem'
              }}>
                <Carousel showArrows={true}
                  showStatus={false}
                  showIndicators={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  showThumbs={false}
                  width={'43rem'}
                  style={{
                    height: '50vh',
                  }}>
                  {stry.carousel.map(image => {
                    return (
                      <img key={image.id}
                        src={image.fluid.src}
                        alt={image.title}
                        style={{
                          height: '50vh'
                        }}
                      />
                    )
                  })}
                </Carousel>
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
    allContentfulStory2 {
        nodes {
          title
          slug
          rightImage {
            fluid {
              src
            }
          }
          mainText2 {
            mainText2
          }
          mainText1 {
            mainText1
          }
          leftImage {
            fluid {
              src
            }
          }
          id
          headerImage {
            fluid {
              src
            }
          }
          date
          bottomText {
            bottomText
          }
          carousel {
            fluid {
              src
            }
          }
        }
      }
  }
  `

export default IndexPage
