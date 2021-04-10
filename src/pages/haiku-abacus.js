import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel';
// import '../components/styles/story1/story1carousel.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Story4Style from '../components/styles/story4/story4.module.css'
import '../components/styles/story4/story4.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components';
import Helmet from 'react-helmet'

const Button = styled.button`
width: 120px;
  padding: 10px 10px;
  font-size: 12px;
  borderRadius: 3px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid black;

    &:hover {
      background-color: black;
      color: white;
    }

    &:focus {
      outline: none
    }
  `

const Story4 = ({ data }) => {

    const { allContentfulStory4: { nodes: story },
    } = data
    return (
        <Layout>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Haiku Abacus - Neferka</title>
                <link rel="canonical" href="http://neferka.design/haiku-abacus" />
            </Helmet>
            <section className={Story4Style}>
                {story.map((stry) => {
                    return (
                        <div className="story4-body">
                            <div className={Story4Style.header}>
                                <h1><b>{stry.title}</b></h1>
                                <p>{stry.date}</p>
                            </div>
                            <div className={Story4Style.mainBody}>
                                <article key={stry.id}>
                                    <section className={Story4Style.section0}>
                                        <div className={Story4Style.div0}>
                                            <Carousel showArrows={true}
                                                showStatus={false}
                                                showIndicators={false}
                                                infiniteLoop={true}
                                                autoPlay={true}
                                                showThumbs={false}
                                                // dynamicHeight={true}
                                                className={Story4Style.story4CarouselRoot}
                                            // style={{
                                            //     height: '90vh',
                                            // }}
                                            >
                                                {stry.carousel.map(image => {
                                                    return (
                                                        <img key={image.id}
                                                            src={image.fluid.src}
                                                            alt={image.title}
                                                            className={Story4Style.story4CarouselImage}
                                                        // style={{
                                                        //     height: '90vh',
                                                        // }}
                                                        />
                                                    )
                                                })}
                                            </Carousel>
                                        </div>
                                    </section>
                                    <section className={Story4Style.section1}>
                                        <p>
                                            {stry.maintText1.maintText1}
                                        </p>
                                    </section>
                                    <section className={Story4Style.section3}>
                                        <div className={Story4Style.div2}>
                                            <img className={Story4Style.img2} src={stry.rightImage.fluid.src} alt={stry.id} />
                                        </div>
                                        <div className={Story4Style.textdiv}>
                                            <p className={Story4Style.p2}>
                                                {stry.mainText2.mainText2}
                                            </p>
                                            <div className={Story4Style.p3}>
                                                {documentToReactComponents(JSON.parse(stry.mainText3.raw))}
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                            <section className={Story4Style.mainBody}
                                style={{
                                    textAlign: 'center',
                                    paddingTop: '2rem',
                                    fontSize: '20px'
                                }}
                            >
                                <p>
                                    {stry.title}
                                </p>
                                <p>
                                    {stry.price}
                                </p>
                                <div>
                                    <Button style={{ marginBottom: '2rem' }}>Purchase</Button>
                                </div>
                            </section>
                        </div>
                    )
                })}
            </section>
        </Layout>
    )
}



export const query = graphql`
  {
    allContentfulStory4 {
        nodes {
          title
          slug
          rightImage {
            fluid {
              src
            }
          }
          price
          maintText1 {
            maintText1
          }
          mainText3{
            raw
          }
          mainText2 {
            mainText2
          }
          image {
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

export default Story4
