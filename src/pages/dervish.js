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
                <figcaption onKeyDown={onCloseModal} role="presentation" onEscKeyDown={onCloseModal} onClick={onOpenModal} className={dervishStyle.figcaption}>
                    Quick View
        </figcaption>
                <p>{node.title}</p>
                <p>{node.price}</p>
                <Modal open={open} onClose={onCloseModal} center>
                    <section className={dervishStyle.row + ' ' + dervishStyle.center} closeButton>
                        <div className={dervishStyle.col + ' ' + dervishStyle.colspan3}>
                            <div className={dervishStyle.modalLeft}>
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
                        <div className={dervishStyle.col + ' ' + dervishStyle.colspan4}>
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




class Dervish extends React.Component {

    render() {
        const DervishNecklace = this.props.data.dervishNecklace.edges
        const DervishVideo = this.props.data.dervishVideo.edges
        const parallax = this.props.data.parallax.edges


        return (
            <Layout>
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
                                    }}
                                >
                                </ParallaxBanner>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={dervishStyle.lowerBody}>
                    <section className={dervishStyle.dervishNecklace}>
                        <h3>Dervish Necklace</h3>
                        <div className={dervishStyle.dervishnecklaceimage}>
                            {DervishNecklace.map(({ node }, i) => (
                                <Product node={node} key={node.id} />
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className={dervishStyle.dervishVideo}>
                            {DervishVideo.map(({ node }, i) => (
                                <div dangerouslySetInnerHTML={{ __html: node.markdownContent.childMarkdownRemark.html, }} />
                            ))}
                        </div>
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
                    <section>
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


                    </section>
                </section>
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