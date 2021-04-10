import React, { useState } from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import dervishStyle from '../components/styles/dervish.module.css'
import { ParallaxBanner } from 'react-scroll-parallax'
import * as PropTypes from 'prop-types'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../components/styles/modalCarousel.min.css'
import { Carousel } from 'react-responsive-carousel';
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

const propTypes = {
  data: PropTypes.object.isRequired,
}


const Product = ({ node }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return (
    <div>
      <figure>
        <Link to={`../${node.slug}`}>
          <Image fluid={node.image.fluid} alt={node.title} />
        </Link>
        <figcaption onKeyDown={onCloseModal} role="presentation" onEscKeyDown={onCloseModal} onClick={onOpenModal} className={dervishStyle.figcaption}>
          Quick View
        </figcaption>
        <p className={dervishStyle.slugStyle}>{node.title}</p>
        <p className={dervishStyle.slugStyle}>{node.price}</p>
        <Modal open={open} onClose={onCloseModal} center>
          <section className={dervishStyle.row + ' ' + dervishStyle.center} closeButton>
            <div className={dervishStyle.col + ' ' + dervishStyle.colspan3}>
              <div className={dervishStyle.modalLeft}>
                <h1 style={{
                  fontFamily: 'Josefin Sans',
                  fontSize: '30px',
                  fontWeight: '500'
                }}>
                  {node.title}</h1>
                <h4 style={{
                  fontFamily: 'Josefin Sans',
                  fontSize: '14px',
                  color: '#696969',
                  fontWeight: '300'
                }}>{node.price}</h4>
                <div>
                  <Button>Purchase</Button>
                </div>
                <br />
                <br />
                <Link style={{ textDecoration: 'none', color: 'dark' }} to={`../${node.slug}`}>View Full Item</Link>
              </div>
            </div>
            <div className={dervishStyle.col + ' ' + dervishStyle.colspan4}>
              <div>
                <Carousel
                  showThumbs={true}
                  showArrows={true}
                  showStatus={false}
                  showIndicators={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  centerMode={true}
                >
                  {node.carousel.map(image => {
                    console.log(image)
                    return (
                      <img alt={node.title} key={image.id} src={image.fluid.src} />
                    )
                  })}
                </Carousel>
              </div>
            </div>
          </section>
        </Modal>
      </figure>
    </div>
  )
}




class Dervish extends React.Component {

  render() {
    const DervishNecklace = this.props.data.dervishNecklace.edges
    const parallax = this.props.data.parallax.edges


    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dervish - Neferka</title>
          <link rel="canonical" href="http://neferka.design/dervish" />
        </Helmet>
        <div className={dervishStyle.dervishContainer}>
          <section className={dervishStyle.upperBody}>
            <div style={{
              // paddingBottom: '2rem',
              top: '-3rem'
            }}>
              {parallax.map(({ node }, i) => (
                <div>
                  <ParallaxBanner layers={[
                    {
                      image: node.dervish.fluid.src,
                      amount: 0.3,
                    }

                  ]}
                    className={
                      dervishStyle.parallax
                    }
                    style={{
                      height: '20rem',
                      width: '40rem',
                      opacity: '0.55'
                    }}
                  >
                    <div className={dervishStyle.parallaxDiv}>
                      <h4 style={{ color: 'black' }}>
                        DERVISH
                    </h4>
                    </div>
                  </ParallaxBanner>
                </div>
              ))}
            </div>
          </section>
          <section className={dervishStyle.lowerBody}>
            <div className={dervishStyle.dervishProductContainer}>
              <section className={dervishStyle.dervishNecklace}>
                <h3>Dervish Necklace</h3>
                <div className={dervishStyle.dervishItem}>
                  {DervishNecklace.map(({ node }, i) => (
                    <Product node={node} key={node.id} />
                  ))}
                </div>
              </section>
            </div>
            {/* <div className={dervishStyle.dervishProductContainer}>
              <section className={dervishStyle.dervishNecklace}>
                  <h3>aaa</h3>
                <div className={dervishStyle.dervishItem}>
                  {DervishNecklace.map(({ node }, i) => (
                    <Product node={node} key={node.id} />
                  ))}
                </div>
              </section>
            </div> */}

            {/* <section> */}
            {/* <div className={dervishStyle.dervishVideo}>
                {DervishVideo.map(({ node }, i) => (
                  <div dangerouslySetInnerHTML={{ __html: node.markdownContent.childMarkdownRemark.html, }} />
                ))}
              </div> */}
            {/* <div className={dervishStyle.dervishVideo}>
                            {DervishVideo.map(({ node }, i) => (
                                documentToReactComponents(node.richTextContent.json, options)
                            ))}

                        </div> */}
            {/* <div>
                        {DervishVideo.map(({ node }, i) => (
                                // <Video node={node} key={node.id}/>
                            ))}
                        </div> */}
            {/* <div dangerouslySetInnerHTML={{__html: DervishVideo.edges.node.markdownContent.childMarkdownRemark.html,}}/> */}
          </section>
          {/* <section> */}
          {/* <div>
                        
                            {this.show ? <div  className="back-drop"></div> : null}
                            <button onClick={() => this.setShow({ count: this.state.count(true) })} className="btn-openModal">Open Modal</button>
                            <Modal show={this.show}  />
                        </div> */}

          {/* <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ height: "100vh" }}
                        >
                            <Button variant="primary" onClick={this.openModal}>
                                Launch demo modal
                            </Button>
                        </div> */}


          {/* </section> */}
          {/* </section> */}
        </div>
      </Layout>
    )
  }
}

Dervish.propTypes = propTypes

export const query = graphql`
{
    dervishNecklace: allContentfulDervish(filter: {category: {eq: "Dervish Necklace"}}) {
        edges {
          node {
            id
            price
            title
            slug
            category
            image {
              fluid {
                src
              }
            }
            carousel {
                fluid {
                  src
                }
              }
          }
        }
      }
      dervishExtra1: allContentfulDervish(filter: {category: {eq: "ExtraCategory1"}}) {
        edges {
          node {
            id
            price
            title
            slug
            category
            image {
              fluid {
                src
              }
            }
            carousel {
                fluid {
                  src
                }
              }
          }
        }
      }

      dervishVideo: allContentfulVideoEmbed(filter: {category: {eq: "Dervish"}}) {
        edges {
          node {
            id
            markdownContent {
              childMarkdownRemark {
                html
              }
            }
            richTextContent {
              raw
            }
            category
          }
        }
      }
      homeImages: allContentfulHome {
        edges {
          node {
            categoryImage {
              fluid {
                src
              }
            }
            category
          }
        }
      }
      
      parallax: allContentfulParallax {
        edges {
          node {
            dervish {
              fluid {
                src
              }
            }
          }
        }
      }
}
`

export default Dervish