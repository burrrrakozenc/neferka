import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel';
// import '../components/styles/story1/story1carousel.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Story5Style from '../components/styles/story5/story5.module.css'
import '../components/styles/story5/story5.module.css'


const Story4 = ({ data }) => {

    const { allContentfulStory5: { nodes: story },
    } = data
    return (
        <Layout>
            <section className={Story5Style}>
                {story.map((stry) => {
                    return (
                        <div className="story5-body">
                            <div className={Story5Style.header}>
                                <h1><b>{stry.title}</b></h1>
                                <p>{stry.date}</p>
                            </div>

                            <div className={Story5Style.mainBody} style={{ fontSize: '13px' }}>
                                <article key={stry.id}>
                                    <section className={Story5Style.section1}>
                                        <div className={Story5Style.div2}>
                                            <img className={Story5Style.img2} src={stry.leftImage1.fluid.src} alt={stry.id} />
                                        </div>
                                        <div className={Story5Style.div2}>
                                            <img className={Story5Style.img2} src={stry.leftImage2.fluid.src} alt={stry.id} />
                                            <span style={{
                                                fontSize: '10px'
                                            }}>{stry.bottomText}</span>
                                        </div>
                                    </section>
                                    <section className={Story5Style.section3}>
                                        <p>
                                            {stry.mainText1.mainText1}
                                        </p>
                                    </section>
                                    <section className={Story5Style.section4}>
                                        <div className={Story5Style.div1}>
                                            <img className={Story5Style.img1} src={stry.rightImage.fluid.src} alt={stry.id} />
                                        </div>
                                        <div>
                                            <p className={Story5Style.p2}>
                                                {stry.mainText2.mainText2}
                                            </p>
                                        </div>
                                    </section>
                                    <section className={Story5Style.section5}>
                                        <div className={Story5Style.div5}>
                                            <Carousel showArrows={true}
                                                showStatus={false}
                                                showIndicators={false}
                                                infiniteLoop={true}
                                                autoPlay={true}
                                                showThumbs={false}
                                                className={Story5Style.story5CarouselRoot}
                                            >
                                                {stry.carousel.map(image => {
                                                    return (
                                                        <img key={image.id}
                                                            src={image.fluid.src}
                                                            alt={image.title}
                                                            className={Story5Style.story5CarouselImage}
                                                        />
                                                    )
                                                })}
                                            </Carousel>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </div>
                    )
                })}
            </section>
        </Layout>
    )
}



export const query = graphql`
  {
    allContentfulStory5 {
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
          leftImage2 {
            fluid {
              src
            }
          }
          leftImage1 {
            fluid {
              src
            }
          }
          id
          date
          carousel {
            fluid {
              src
            }
          }
          bottomText
        }
      }
  }
  `

export default Story4
