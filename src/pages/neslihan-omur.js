import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel';
// import story1Style from '../components/styles/story1/story1.module.css'
// import '../components/styles/story1/story1carousel.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import story1Style from '../components/styles/story1/story12.css'
import '../components/styles/story1/story12.css'
// import Slider from "react-slick";



const Story1 = ({ data }) => {

    const { allContentfulStory1: { nodes: story },
    } = data
    return (
        <Layout>
            <div className="story1-wrapper">
                {story.map((stry) => {
                    return (
                        <body className="story1-body">
                            <div className="story1-header">
                                <h1><b>{stry.title}</b></h1>
                                <p>{stry.date}</p>
                                <h2>{stry.headerText.headerText}</h2>
                            </div>
                            <div className="story1-lower-body">
                                {/* <article key={stry.id}> */}
                                <div className="story1-section1">
                                    {/* <div className={story1Style.div0}> */}
                                    <Carousel showArrows={true}
                                        showStatus={false}
                                        showIndicators={false}
                                        infiniteLoop={true}
                                        autoPlay={true}
                                        showThumbs={false}
                                        className="story1CarouselRoot"
                                    >
                                        {stry.carousel.map(image => {
                                            return (
                                                <img key={image.id}
                                                    src={image.fluid.src}
                                                    alt={image.title}
                                                    // height={'500px'}
                                                    // width={1000}
                                                    className="story1CarouselImage"
                                                />
                                            )
                                        })}
                                    </Carousel>
                                    {/* </div> */}
                                </div>
                                <div className="story1-section2">
                                    <p>
                                        {stry.textMain1.textMain1}
                                    </p>
                                </div>
                                <div className="story1-section3-wrapper">
                                    <div className="story1-section3">
                                        <img className="img1" src={stry.rightImage.fluid.src} alt={stry.id} />
                                    </div>
                                    <p>
                                        {stry.textMain2.textMain2}
                                    </p>
                                </div>
                                <div className="story1-section4-wrapper">
                                    <div className="story1-section4-1">
                                        <img className="img2" src={stry.leftImage.fluid.src} alt={stry.id} />
                                    </div>
                                    <div className="story1-section4-2">
                                        <p>
                                            {stry.textMain3.textMain3}
                                        </p>
                                    </div>
                                </div>
                                <div className="story1-section5-wrapper">
                                    <div className="story1-section3">
                                        <div dangerouslySetInnerHTML={{ __html: stry.video1.childMarkdownRemark.html, }} className="img3"
                                            // style={{
                                            //     width: '25rem',
                                            //     height: '13rem'
                                            // }}
                                        />
                                    </div>
                                    <p>
                                        {stry.textMain4.textMain4}
                                    </p>
                                </div>
                                <div className="story1-section6-wrapper">
                                    <div className="story1-section4-1">
                                        <div dangerouslySetInnerHTML={{ __html: stry.video2.childMarkdownRemark.html, }} className="img4"
                                            // style={{
                                            //     width: '26rem',
                                            //     height: '12rem'
                                            // }}
                                        />
                                        {/* <img className={story1Style.img3} src={stry.leftImage.fluid.src} alt={stry.id} /> */}
                                    </div>

                                </div>
                                <div className="story1-section7">
                                    <p>
                                        {stry.textMain5.textMain5}
                                    </p><p>
                                        {stry.textMain6.textMain6}
                                    </p>
                                </div>
                                {/* </article> */}
                            </div>
                        </body>
                    )
                })}
            </div>
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

export default Story1
