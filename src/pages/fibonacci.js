import React, { useState } from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import fibonacciStyle from '../components/styles/fibonacci.module.css'
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
                <figcaption onKeyDown={onCloseModal} role="presentation" onEscKeyDown={onCloseModal} onClick={onOpenModal} className={fibonacciStyle.figcaption}>
                    Quick View
        </figcaption>
                <p className={fibonacciStyle.slugStyle}>{node.title}</p>
                <p className={fibonacciStyle.slugStyle}>{node.price}</p>
                <Modal open={open} onClose={onCloseModal} center>
                    <section className={fibonacciStyle.row + ' ' + fibonacciStyle.center} closeButton>
                        <div className={fibonacciStyle.col + ' ' + fibonacciStyle.colspan3}>
                            <div className={fibonacciStyle.modalLeft}>
                                <h1 style={{
                                    fontFamily: 'Josefin Sans',
                                    fontSize: '32px',
                                    fontWeight: '500'
                                }}>{node.title}</h1>
                                <h4 style={{
                                    fontFamily: 'Josefin Sans',
                                    fontSize: '14px',
                                    color: '#696969',
                                    fontWeight: '300'
                                }}>{node.price}</h4>
                                <div>
                                <a href={node.link} target="_blank"><Button>Purchase</Button></a>
                                </div>
                                <br />
                                <br />
                                <Link style={{ textDecoration: 'none', color: 'gray' }} to={`../${node.slug}`}>View Full Item</Link>
                            </div>
                        </div>
                        <div className={fibonacciStyle.col + ' ' + fibonacciStyle.colspan4}>
                            <div>
                                <Carousel
                                    showThumbs={true}
                                    showArrows={true}
                                    showStatus={false}
                                    showIndicators={false}
                                    infiniteLoop={true}
                                    autoPlay={true}
                                    centerMode={true}
                                // thumbWidth={'80px'}
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


class Fibonacci extends React.Component {
    render() {
        const fibonacciV2Product = this.props.data.fibonacciV2.edges
        const fibonacciNecklaceProduct = this.props.data.fibonacciNecklace.edges
        const parallax = this.props.data.parallax.edges


        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Fibonacci - Neferka</title>
                    <link rel="canonical" href="http://neferka.design/fibonacci" />
                </Helmet>
                <div className={fibonacciStyle.fibonacciContainer}>
                    <section className={fibonacciStyle.upperBody}>
                        <div style={{
                            paddingBottom: '2rem',
                            top: '-3rem'
                        }}>
                            {parallax.map(({ node }, i) => (
                                <div>
                                    <ParallaxBanner layers={[
                                        {
                                            image: node.fibonacci.fluid.src,
                                            amount: 0.3,
                                        }

                                    ]}
                                        style={{
                                            height: '40rem',
                                            width: '50rem',
                                            // opacity: '0.8'
                                        }}
                                        className={fibonacciStyle.parallax}
                                    >
                                        <div className={fibonacciStyle.parallaxDiv}>
                                            <h4>
                                                FIBONACCI
                                        </h4>
                                            <p>
                                                {node.fibonacciMain.fibonacciMain}
                                            </p>
                                        </div>

                                    </ParallaxBanner>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className={fibonacciStyle.lowerBody}>
                        <div className={fibonacciStyle.fibonacciProductContainer}>
                            <section className={fibonacciStyle.v2}>
                                <h3>Fibonacci V2</h3>
                                <div className={fibonacciStyle.fibonacciItem}>
                                    {fibonacciV2Product.map(({ node }, i) => (
                                        <Product node={node} key={node.id} />
                                    ))}
                                </div>

                            </section>
                        </div>
                        <div className={fibonacciStyle.fibonacciProductContainer}>
                            <section className={fibonacciStyle.necklace}>
                                <h3>Fibonacci Necklace</h3>
                                <div className={fibonacciStyle.fibonacciItem}>
                                    {fibonacciNecklaceProduct.map(({ node }, i) => (
                                        <Product node={node} key={node.id} />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </Layout >
        )
    }
}

Fibonacci.propTypes = propTypes




export const query = graphql`
{
    fibonacciV2: allContentfulFibonacci(filter: {category: {eq: "Fibonacci V2"}}) {
        edges {
          node {
            id
            slug
            price
            title
            link
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

    fibonacciNecklace: allContentfulFibonacci(filter: {category: {eq: "Fibonacci Necklace"}}) {
        edges {
          node {
            id
            slug
            price
            title
            link
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
      parallax: allContentfulParallax {
        edges {
          node {
            fibonacci {
              fluid {
                src
              }
            }
            fibonacciMain {
                fibonacciMain
              }
          }
        }
      }
    
  }

`



export default Fibonacci
