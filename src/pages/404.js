import React from "react"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage


// import React, { useState } from 'react'
// import Layout from "../components/layout"
// import { graphql } from 'gatsby'
// import Image from 'gatsby-image'
// import { Link } from 'gatsby-plugin-modal-routing'
// import product1Style from '../components/styles/product1.module.css'
// import * as PropTypes from 'prop-types'
// import { Modal } from "react-bootstrap";
// import styled, { css } from 'styled-components';
// import Slide from 'react-reveal/Slide';
// import makeCarousel from 'react-reveal/makeCarousel';

// const propTypes = {
//   data: PropTypes.object.isRequired,
// }


// const width = '25rem', height = '25rem';
// const Container = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: ${width};
//   height: ${height};
// `;
// const Arrow = styled.div`
//   color: gray;
//   z-index: 100;
//   line-height: ${height};
//   text-align: center;
//   position: absolute;
//   top: 0;
//   width: 10%;
//   font-size: 3em;
//   cursor: pointer;
//   user-select: none;
//   ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
// `;
// const CarouselUI = ({ position, handleClick, children }) => (
//   <Container>
//     {children}
//     <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
//     <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
//   </Container>
// );
// const Carousel = makeCarousel(CarouselUI)

// const Product = ({ node }) => {
//   const [showModal, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <figure>
//         <Link href="/">
//           <Image fluid={node.image.fluid} alt={node.title} />
//         </Link>
//         <figcaption onClick={handleShow}>
//           <h4>Quick View</h4>
//         </figcaption>
//         <p>{node.title}</p>
//         <p>{node.price}</p>
//         <Modal className={product1Style.Modal} show={showModal} onHide={handleClose}>
//           <section className={product1Style.modalheader}>
//             <h1>{node.title}</h1>
//           </section>
//           <section className={product1Style.modalcontent}>
//             <Modal.Body className={product1Style.row + ' ' + product1Style.center} closeButton>
//               <div className={product1Style.col + ' ' + product1Style.colspan3}>
//                 <h4>{node.price}</h4>
//                 <div>
//                   <button>Purchase</button>
//                 </div>
//               </div>
//               <div className={product1Style.col + ' ' + product1Style.colspan4}>
//                 <Carousel>
//                   {node.images.map((nod) => {
//                     return (
//                       <Slide>
//                         <Image fluid={nod.images.fluid} />
//                       </Slide>
//                     )
//                   })}
//                 </Carousel>
//               </div>
//             </Modal.Body>
//           </section>
//         </Modal>
//       </figure>
//     </div>
//   )
// }


// class Product1 extends React.Component {

//   render() {
//       const ProductNecklace = this.props.data.productNecklace.edges

//       return (
//           <Layout>
//               <section className={product1Style.lowerBody}>
//                   <section className={product1Style.product1Necklace}>
//                       <h3>Product1 Necklace</h3>
//                       <div className={product1Style.productnecklaceimage}>
//                           {ProductNecklace.map(({ node }, i) => (
//                               <Product node={node} key={node.id} />
//                           ))}
//                       </div>
//                   </section>
//               </section>
//           </Layout>
//       )
//   }
// }

// Product1.propTypes = propTypes

// export const query = graphql`
// {
//     product1Necklace: allContentfulProduct1(filter: {category: {eq: "Product Necklace"}}) {
//         edges {
//           node {
//             id
//             price
//             title
//             category
//             image {
//               fluid {
//                 src
//               }
//             }
//             images {
//                 fluid {
//                   src
//                 }
//               }
//           }
//         }
//       }
// }
// `

// export default Product1
