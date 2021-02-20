import React, { Component } from "react";
import Slider from "react-slick";
import Layout from '../components/layout'
import { graphql } from 'gatsby'
// import { Carousel } from 'react-responsive-carousel'
import * as PropTypes from 'prop-types'
// import '../components/styles/story1new.css'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Img from 'gatsby-image'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class Story1 extends React.Component {
    render() {
        // const DesignedObjects = this.props.data.designedObjects.nodes
        const Story1Carousel = this.props.data.story1.nodes
        // const Story1Images = this.props.data.gallery.nodes
        // const Story1Text = this.props.data.gallery.nodes
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        // const { slides } = this.props.data.story1.nodes.carousel;
        

        return (
            <Layout>
                <div className="story1-wrapper">
                    <div className="story1-container">
                        <Slider {...settings}>
                                {Story1Carousel.map((item) => {
                                    return (
                                        <div key={item.carousel}>
                                            <Img fluid={item.carousel.fluid} alt="a"/>
                                        </div>

                                        // <div key={item}>
                                        //     <Img fluid={item.carousel.fluid}
                                        //         style={{
                                        //             width: '10rem',
                                        //             height: '10rem'
                                        //         }}
                                        //     />
                                        //     {/* <Image
                                        //     key={item.id}
                                        //     // className="carousel-image"
                                        //     fluid={item.carousel.fluid}
                                        //     alt="a"
                                        //     // style={{
                                        //     //     height: '30rem',
                                        //     //     width: '30rem'

                                        //     // }}
                                        // /> */}
                                        // </div>
                                    )
                                })}
                            {/* </div> */}
                        </Slider>

                        {/* {story1.carousel.map((image) => {
                            return (
                                <Img className="carousel-image" key={carousel.id} fluid={image.fluid} />
                            )
                        })}
                        </Carousel> */}
                    </div>
                </div>
            </Layout >
        )
    }
}

Story1.propTypes = propTypes

export const query = graphql`
  {
    story1: allContentfulStory1 {
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
