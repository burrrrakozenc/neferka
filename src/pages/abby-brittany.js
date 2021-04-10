import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel';
import Image from 'gatsby-image'
// import '../components/styles/story2/story2carousel.module.css'
// import '../components/styles/story1/story1carousel.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import story2Style from '../components/styles/story2/story2.module.css'
import Helmet from 'react-helmet'


const Story2 = ({ data }) => {
  const { allContentfulStory2: { nodes: story },
  } = data

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Abby & Britanny - Neferka</title>
        <link rel="canonical" href="http://neferka.design/abby-brittany" />
      </Helmet>
      <section className={story2Style.story2wrapper}>
        {story.map((stry) => {
          return (
            <div>
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
                      <img className={story2Style.img1} src={stry.leftImage.fluid.src} alt={stry.id} />
                    </div>
                    <p>
                      {stry.mainText2.mainText2}
                    </p>
                  </section>
                  <section className={story2Style.section3}>
                    <div className={story2Style.div2}>
                      <img className={story2Style.img2} src={stry.rightImage.fluid.src} alt={stry.id} />
                    </div>
                    <p>
                      {stry.bottomText.bottomText}
                    </p>
                  </section>
                  <section className={story2Style.section4}>
                    <Carousel showArrows={true}
                      showStatus={false}
                      showIndicators={false}
                      infiniteLoop={true}
                      autoPlay={true}
                      showThumbs={false}
                      className={story2Style.story2CarouselRoot}
                    >
                      {stry.carousel.map(image => {
                        return (
                          <img key={image.id}
                            src={image.fluid.src}
                            alt={image.title}
                            // height={'500px'}
                            className={story2Style.story2CarouselImage}
                          />
                        )
                      })}
                    </Carousel>
                  </section>
                </article>
              </div>
              {/* <div classNam={story2Style.carousel} style={{
                paddingTop: '8rem',
                paddingLeft: '10rem'
              }}>

              </div> */}
            </div>
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

export default Story2
