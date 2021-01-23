import React, { useState } from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import illusionsStyle from '../components/styles/illusions.module.css'
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
        <figcaption onKeyDown={onCloseModal} role="presentation" onEscKeyDown={onCloseModal} onClick={onOpenModal} className={illusionsStyle.figcaption}>
          Quick View
        </figcaption>
        <p>{node.title}</p>
        <p>{node.price}</p>
        <Modal open={open} onClose={onCloseModal} center>
          <section className={illusionsStyle.row + ' ' + illusionsStyle.center} closeButton>
            <div className={illusionsStyle.col + ' ' + illusionsStyle.colspan3}>
              <div className={illusionsStyle.modalLeft}>
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
            <div className={illusionsStyle.col + ' ' + illusionsStyle.colspan4}>
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

class Illusions extends React.Component {
  render() {
    const Illusions1 = this.props.data.illusions1.edges
    const Illusions2 = this.props.data.illusions2.edges
    const Illusions3 = this.props.data.illusions3.edges
    const parallax = this.props.data.parallax.edges

    return (
      <Layout>
        <section className={illusionsStyle.upperBody}>
          <div style={{
            top: '-3rem'
          }}>
            {parallax.map(({ node }, i) => (
              <div>
                <ParallaxBanner layers={[
                  {
                    image: node.illusions.fluid.src,
                    amount: 0.3,
                  }

                ]}
                  style={{
                    height: '40rem',
                    width: '50rem',
                  }}
                  className={illusionsStyle.parallax}
                >
                  <div className={illusionsStyle.parallaxDiv}>
                    <h4>
                      ILLUSIONS
                                        </h4>
                    <p>
                      {node.illusionsMain.illusionsMain}
                    </p>
                  </div>
                </ParallaxBanner>
              </div>
            ))}
          </div>
        </section>
        <section className={illusionsStyle.lowerBody}>
          <section className={illusionsStyle.mirageRing}>
            <h3>Mirage Ring</h3>
            <div className={illusionsStyle.mirageRingimage}>
              {Illusions1.map(({ node }, i) => (
                <Product node={node} key={node.id} />
              ))}
            </div>
          </section>
          <section className={illusionsStyle.mirageNecklace}>
            <h3>Mirage Necklace</h3>
            <div className={illusionsStyle.mirageRingimage}>
              {Illusions2.map(({ node }, i) => (
                <Product node={node} key={node.id} />
              ))}
            </div>
          </section>
          <section className={illusionsStyle.perspective}>
            <h3>Perspective</h3>
            <div className={illusionsStyle.mirageRingimage}>
              {Illusions3.map(({ node }, i) => (
                <Product node={node} key={node.id} />
              ))}
            </div>
          </section>
        </section>
      </Layout >
    )
  }
}

Illusions.propTypes = propTypes

export const query = graphql`
{
    illusions1: allContentfulIllusions(filter: {category: {eq: "Mirage Ring"}}) {
      edges {
        node {
          id
          price
          slug
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

    illusions2: allContentfulIllusions(filter: {category: {eq: "Mirage Necklace"}}) {
      edges {
        node {
          id
          price
          slug
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

    illusions3: allContentfulIllusions(filter: {category: {eq: "Perspective"}}) {
      edges {
        node {
          id
          price
          slug
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
            illusions {
              fluid {
                src
              }
            }
            illusionsMain {
                illusionsMain
              }
          }
        }
      }
    
  }

`



export default Illusions
