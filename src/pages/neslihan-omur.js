import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel';
import story1Style from '../components/styles/story1/story1.module.css'
// import '../components/styles/story1/story1carousel.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const IndexPage = ({ data }) => {

    const { allContentfulStory1: { nodes: story },
    } = data
    return (
        <Layout>
            <section className={story1Style.body}>
                {story.map((stry) => {
                    return (
                        <body>
                            <div className={story1Style.header}>
                                <h1><b>{stry.title}</b></h1>
                                <p>{stry.date}</p>
                                <h2>{stry.headerText.headerText}</h2>
                            </div>
                            <div className={story1Style.mainBody}>
                                <article key={stry.id}>
                                    <section className={story1Style.section0}>
                                        <div className={story1Style.div0}>
                                            <Carousel  showArrows={true}
                                                showStatus={false}
                                                showIndicators={false}
                                                infiniteLoop={true}
                                                autoPlay={true}
                                                showThumbs={false}
                                                // dynamicHeight={true}
                                                width={'100%'}
                                            >
                                                {stry.carousel.map(image => {
                                                    return (
                                                        <img key={image.id}
                                                            src={image.fluid.src}
                                                            alt={image.title}
                                                            // style={{
                                                            //     height: '100vh',
                                                            //     // width: '60rem'
                                                            // }}
                                                        />
                                                    )
                                                })}
                                            </Carousel>
                                        </div>
                                    </section>
                                    <section className={story1Style.section1}>
                                        <p>
                                            {stry.textMain1.textMain1}
                                        </p>
                                    </section>
                                    <section className={story1Style.section2}>
                                        <div className={story1Style.div1}>
                                            <img className={story1Style.img1} src={stry.rightImage.fluid.src} alt={stry.id} />
                                        </div>
                                        <p>
                                            {stry.textMain2.textMain2}
                                        </p>
                                    </section>
                                    <section className={story1Style.section3}>
                                        <div className={story1Style.div2}>
                                            <img className={story1Style.img2} src={stry.leftImage.fluid.src} alt={stry.id} />
                                        </div>
                                        <div className={story1Style.textdiv}>
                                            <p className={story1Style.p2}>
                                                {stry.textMain3.textMain3}
                                            </p>
                                        </div>
                                    </section>
                                    <section className={story1Style.section4}>
                                        <div className={story1Style.div1}>
                                            <div dangerouslySetInnerHTML={{ __html: stry.video1.childMarkdownRemark.html, }} className={story1Style.img3}
                                                style={{
                                                    width: '25rem',
                                                    height: '13rem'
                                                }}
                                            />
                                        </div>
                                        <p>
                                            {stry.textMain4.textMain4}
                                        </p>
                                    </section>
                                    <section className={story1Style.section5}>
                                        <div className={story1Style.div2}>
                                            <div dangerouslySetInnerHTML={{ __html: stry.video2.childMarkdownRemark.html, }} className={story1Style.img4}
                                                style={{
                                                    width: '26rem',
                                                    height: '12rem'
                                                }}
                                            />
                                            {/* <img className={story1Style.img3} src={stry.leftImage.fluid.src} alt={stry.id} /> */}
                                        </div>

                                    </section>
                                    <section className={story1Style.section6}>
                                        <p>
                                            {stry.textMain5.textMain5}
                                        </p><p>
                                            {stry.textMain6.textMain6}
                                        </p>
                                    </section>
                                </article>
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
    allContentfulStory1 {
        nodes {
          carousel {
            fluid {
              src
            }
          }
          date
          id
          headerText {
            headerText
          }
          leftImage {
            fluid {
              src
            }
          }
          textMain1 {
                textMain1
        }
          textMain2 {
                textMain2
            }
            textMain3 {
                textMain3
            }
            textMain4 {
                textMain4
            }
            textMain5 {
                textMain5
            }
            textMain6 {
                textMain6
            }  
          rightImage {
            fluid {
              src
            }
          }
          title
          video1 {
            childMarkdownRemark {
              html
            }
          }
          video2 {
            childMarkdownRemark {
              html
            }
          }
        }
      }

  }
  `

export default IndexPage
