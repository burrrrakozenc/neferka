import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import { Carousel } from 'react-responsive-carousel';
import '../components/styles/story2/story2carousel.module.css'
import story3Style from '../components/styles/story3/story3.module.css'
import '../components/styles/story3/story3.module.css'


const Story3 = ({ data }) => {

    const { allContentfulStory3: { nodes: story },
    } = data
    return (
        <Layout>
            <section className={story3Style}>
                {story.map((stry) => {
                    return (
                        <div className={story3Style.story3Wrapper}>
                            <div className={story3Style.header}>
                                <h1><b>{stry.title}</b></h1>
                                <p>{stry.date}</p>
                            </div>
                            <div className={story3Style.mainBody} style={{ margin: '0 auto' }}>
                                <article key={stry.id}>
                                    <section className={story3Style.section0}>
                                        <div className={story3Style.div0}>
                                            <Carousel showArrows={true}
                                                showStatus={false}
                                                showIndicators={false}
                                                infiniteLoop={true}
                                                autoPlay={true}
                                                showThumbs={false}
                                                dynamicHeight={true}
                                                className="carousel-root"
                                                // className={story3Style.topCarouselRoot}
                                            >
                                                {stry.carousel.map(image => {
                                                    return (
                                                        <img key={image.id}
                                                            src={image.fluid.src}
                                                            alt={image.title}
                                                            // style={{
                                                            //     height:"100%"
                                                            // }}
                                                            // className={story3Style.topCarouselImage}
                                                            className="carousel-image"
                                                        />
                                                    )
                                                })}
                                            </Carousel>
                                        </div>
                                    </section>
                                    <section className={story3Style.section1}>
                                        <p>
                                            {stry.mainText1.mainText1}
                                        </p>
                                    </section>
                                    <section className={story3Style.section2}>
                                        <div className={story3Style.div1}>
                                            <img className={story3Style.img1} src={stry.rightImage.fluid.src} alt={stry.id} />
                                        </div>
                                        <p>
                                            {stry.mainText2.mainText2}
                                        </p>
                                    </section>
                                    <section className={story3Style.section3}>
                                        <div className={story3Style.div2}>
                                            <Carousel showArrows={true}
                                                showStatus={false}
                                                showIndicators={false}
                                                infiniteLoop={true}
                                                autoPlay={true}
                                                showThumbs={false}
                                                dynamicHeight={true}
                                                className={story3Style.carouselRoot1}
                                            >
                                                {stry.carousel.map(image => {
                                                    return (
                                                        <img key={image.id}
                                                            src={image.fluid.src}
                                                            alt={image.title}
                                                            className={story3Style.carouselImage1}
                                                        />
                                                    )
                                                })}
                                            </Carousel>
                                        </div>
                                        {/* <div className={story3Style.textdiv}> */}
                                        <p className={story3Style.p2}>
                                            {stry.mainText3.mainText3}
                                        </p>
                                        {/* </div> */}
                                    </section>
                                    <section className={story3Style.section4}>
                                        <div className={story3Style.div3}>
                                            <Carousel showArrows={true}
                                                showStatus={false}
                                                showIndicators={false}
                                                infiniteLoop={true}
                                                autoPlay={true}
                                                showThumbs={false}
                                                dynamicHeight={true}
                                                className={story3Style.carouselRoot2}
                                            >
                                                {stry.carousel.map(image => {
                                                    return (
                                                        <img key={image.id}
                                                            src={image.fluid.src}
                                                            alt={image.title}
                                                            className={story3Style.carouselImage2}
                                                        />
                                                    )
                                                })}
                                            </Carousel>
                                        </div>
                                        <p>
                                            {stry.mainText4.mainText4}
                                        </p>
                                    </section>
                                </article>
                            </div>
                        </div>
                    )
                })}
            </section >
        </Layout >
    )
}



export const query = graphql`
  {
    allContentfulStory3 {
        nodes {
          title
          slug
          rightImage2 {
            fluid {
              src
            }
          }
          rightImage {
            fluid {
              src
            }
          }
          mainText4 {
            mainText4
          }
          mainText3 {
            mainText3
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
          date
          id
          carousel {
            fluid {
              src
            }
          }
        }
      }
  }
  `

export default Story3
