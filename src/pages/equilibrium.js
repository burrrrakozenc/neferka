import React, { useState } from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import equilibriumStyle from '../components/styles/equilibrium.module.css'
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
                <figcaption onKeyDown={onCloseModal} role="presentation" onEscKeyDown={onCloseModal} onClick={onOpenModal} className={equilibriumStyle.figcaption}>
                    Quick View
        </figcaption>
                <p className={equilibriumStyle.slugStyle}>{node.title}</p>
                <p className={equilibriumStyle.slugStyle}>{node.price}</p>
                <Modal open={open} onClose={onCloseModal} center>
                    <section className={equilibriumStyle.row + ' ' + equilibriumStyle.center} closeButton>
                        <div className={equilibriumStyle.col + ' ' + equilibriumStyle.colspan3}>
                            <div className={equilibriumStyle.modalLeft}>
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
                        <div className={equilibriumStyle.col + ' ' + equilibriumStyle.colspan4}>
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
        </div >
    )
}

class Equilibrium extends React.Component {
    render() {
        const GoldenBalance = this.props.data.goldenBalance.edges
        const parallax = this.props.data.parallax.edges

        return (
            <Layout>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Equilibrium - Neferka</title>
                <link rel="canonical" href="http://neferka.design/equilibrium" />
            </Helmet>
                <section className={equilibriumStyle.upperBody}>
                    <div style={{
                        top: '-3rem',
                        bottom: '-3rem'
                    }}>
                        {parallax.map(({ node }, i) => (
                            <div>
                                <ParallaxBanner layers={[
                                    {
                                        image: node.equilibrium.fluid.src,
                                        amount: 0.3,
                                    }

                                ]}
                                    style={{
                                        height: '30rem',
                                        width: '40rem',
                                    }}
                                    className={equilibriumStyle.parallax}>
                                    <div className={equilibriumStyle.parallaxDiv}>
                                        <h4>
                                            EQUILIBRIUM
                                        </h4>
                                        <p>
                                            {node.equilibriumMain.equilibriumMain}
                                        </p>
                                    </div>
                                </ParallaxBanner>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={equilibriumStyle.lowerBody}>
                    <div className={equilibriumStyle.equilibriumProductContainer}>
                    <section className={equilibriumStyle.goldenBalance}>
                        <h3>Golden Balance</h3>
                        <div className={equilibriumStyle.equilibriumItem}>
                            {GoldenBalance.map(({ node }, i) => (
                                <Product node={node} key={node.id} />
                            ))}
                        </div>
                    </section>
                    </div>
                </section>
            </Layout >
        )
    }
}

Equilibrium.propTypes = propTypes

export const query = graphql`
{
    goldenBalance: allContentfulEquilibrium(filter: {title: {eq: "Golden Balance"}}) {
        edges {
          node {
            carousel {
              fluid {
                src
              }
            }
            category
            link
            id
            image {
              fluid {
                src
              }
            }
            price
            slug
            title
          }
        }
      }
      parallax: allContentfulParallax {
        edges {
          node {
            equilibrium {
              fluid {
                src
              }
            }
            equilibriumMain {
                equilibriumMain
              }
          }
        }
      }
    
  }

`



export default Equilibrium
