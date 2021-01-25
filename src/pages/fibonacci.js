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

const Button = styled.button`
width: 120px;
  padding: 10px 10px;
  font-size: 12px;
  borderRadius: 3px;
  cursor: pointer;
  background-color: white;
  color: gray;
  border: 2px solid #DCDCDC;

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
                                <h1>{node.title}</h1>
                                <h4>{node.price}</h4>
                                <div>
                                    <Button>Purchase</Button>
                                </div>
                                <br />
                                <br />
                                <Link style={{ textDecoration: 'none' }} to={`../${node.slug}`}>View Full Item</Link>
                            </div>
                        </div>
                        <div className={fibonacciStyle.col + ' ' + fibonacciStyle.colspan4}>
                            <div>
                                <Carousel showArrows={true} showThumbs={true} showIndicators={false} infiniteLoop={true} centerMode={true} thumbWidth={'80px'}>
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
                    <section className={fibonacciStyle.v2}>
                        <h3>Fibonacci V2</h3>
                        <div className={fibonacciStyle.v2image}>
                            {fibonacciV2Product.map(({ node }, i) => (
                                <Product node={node} key={node.id} />
                            ))}
                        </div>
                    </section>
                    <section className={fibonacciStyle.necklace}>
                        <h3>Fibonacci Necklace</h3>
                        <div>
                            {fibonacciNecklaceProduct.map(({ node }, i) => (
                                <Product node={node} key={node.id} />
                            ))}
                        </div>
                    </section>
                </section>

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
