import React, { useState } from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import solariaStyle from '../components/styles/solaria.module.css'
import { ParallaxBanner } from 'react-scroll-parallax'
import * as PropTypes from 'prop-types'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../components/styles/modalCarousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

// import { Modal } from "react-bootstrap";
// import styled from 'styled-components';
// import { Carousel } from 'react-responsive-carousel';
// import carouselStyle from '../components/styles/modalCarousel.min.css'
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
        <figcaption onKeyDown={onCloseModal} role="presentation" onEscKeyDown={onCloseModal} open={open} onClick={onOpenModal} onClose={onCloseModal} className={solariaStyle.figcaption} >
          Quick View
        </figcaption>
        <p className={solariaStyle.slugStyle}>{node.title}</p>
        <p className={solariaStyle.slugStyle}>{node.price}</p>
        <Modal onEscKeyDown={onCloseModal} open={open} onClose={onCloseModal} center>
          <section className={solariaStyle.row + ' ' + solariaStyle.center} closeButton>
            <div className={solariaStyle.col + ' ' + solariaStyle.colspan3}>
              <div className={solariaStyle.modalLeft}>
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
                  <Button style={{ marginBottom: '2rem' }}>Purchase</Button>
                </div>
                <Link style={{ textDecoration: 'none', color: 'gray' }} to={`../${node.slug}`}>View Full Item</Link>
              </div>
            </div>
            <div className={solariaStyle.col + ' ' + solariaStyle.colspan4}>
              <div>
                <Carousel showArrows={true} showThumbs={true} showIndicators={false} infiniteLoop={true} centerMode={true}>
                  {node.carousel.map(image => {
                    console.log(image)
                    return (
                      <img key={image.id} alt={image.title} src={image.fluid.src} />
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

class Solaria extends React.Component {
  render() {
    const circaProduct = this.props.data.circa.edges
    const spheraProduct = this.props.data.sphera.edges
    const trigonaProduct = this.props.data.trigona.edges
    const parallax = this.props.data.parallax.edges

    return (
      <Layout>
          <div className={solariaStyle.solariContainer}>
            <section className={solariaStyle.upperBody}>
              <div style={{
                top: '-3rem',
              }}>
                {parallax.map(({ node }, i) => (
                  <div>
                    <ParallaxBanner layers={[
                      {
                        image: node.solaria.fluid.src,
                        amount: 0.3,
                      }

                    ]}
                      style={{
                        height: '40rem',
                        width: '100%',
                        opacity: '0.6'
                      }}
                      className={
                        solariaStyle.parallax
                      }
                    >
                      <div className={solariaStyle.parallaxDiv}>
                        <h4>
                          SOLARIA
                    </h4>
                        <p>
                          {node.solariaMain.solariaMain}
                        </p>
                      </div>

                    </ParallaxBanner>
                  </div>
                ))}
              </div>
            </section>
            <section className={solariaStyle.lowerBody}>
              <section className={solariaStyle.Circa}>
                <h3>Circa</h3>
                <div className={solariaStyle.circaimage}>
                  {circaProduct.map(({ node }, i) => (
                    <Product node={node} key={node.id} />
                  ))}
                </div>
              </section>
              <section className={solariaStyle.Sphera}>
                <h3>Sphera</h3>
                <div>
                  {spheraProduct.map(({ node }, i) => (
                    <Product node={node} key={node.id} />
                  ))}
                </div>
              </section>
              <section className={solariaStyle.Trigona}>
                <h3>Trigona</h3>
                <div>
                  {trigonaProduct.map(({ node }, i) => (
                    <Product node={node} key={node.id} />
                  ))}
                </div>
              </section>
              {/* <section className={solariaStyle.Trigona}>
            <div>
              {trigonaProduct.map(({ node }, i) => (
                <>
                <h3>Trigona</h3>
                <Product node={node} key={node.id} />
                </>
              ))}
            </div>
          </section> */}
            </section>
          </div>
      </Layout >
    )
  }
}

Solaria.propTypes = propTypes


export const query = graphql`
{
          circa: allContentfulSolaria(filter: {category: {eq: "circa"}}) {
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

    sphera: allContentfulSolaria(filter: {category: {eq: "sphera"}}) {
          edges {
          node {
          id
            price
            title
            category
            slug
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

    trigona: allContentfulSolaria(filter: {category: {eq: "trigona"}}) {
          edges {
          node {
          id
          price
          title
          category
          slug
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
          solaria {
          fluid {
          src
        }
          }
          solariaMain {
          solariaMain
        }
        }
      }
    }
    
  }

`


export default Solaria
