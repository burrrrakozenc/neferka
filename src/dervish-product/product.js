import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/productLayout'
import styled from 'styled-components';
import productStyle from '../components/styles/product.module.css'
import Footer from '../components/footer';
import Helmet from 'react-helmet'

const Button = styled.button`
width: 100px;
  min-width: 100px;
  padding: 10px 10px;
  font-size: 12px;
  borderRadius: 3px;
  cursor: pointer;
  background-color: white;
  color: gray;
  border: 2px solid #DCDCDC;
`


class DervishProduct extends Component {
  render() {

    const {
      title,
      price,
      category,
      carousel,
    } = this.props.data.contentfulDervish

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title} - Neferka</title>
          <link rel="canonical" href="http://neferka.design/dervish" />
        </Helmet>
        <div>
          <section className={productStyle.productBody}>
            <div className={productStyle.div1}>
              <div>
                <figure>
                  <article>
                    <h1 style={{
                      maxWidth: '250px',
                      fontSize: '40px',
                      fontWeight: '400'
                    }}>{title}</h1>
                    <h4 style={{
                      fontFamily: 'Josefin Sans',
                      fontSize: '18px',
                      color: '#696969',
                      fontWeight: '300'
                    }}>{price}</h4>
                    <Button>Purchase</Button>
                    <h4>{category}</h4>
                  </article>
                  <div>
                    {carousel.map((image) => {
                      return (
                        <Img className={productStyle.productImage} fluid={image.fluid} />
                      )
                    })}
                     <div className={productStyle.push}>
                      {/* <footer className={productStyle.footer}>
                        <Link target="_blank" to="https://www.instagram.com/neferka_design/">
                          INSTAGRAM
                </Link>
                        <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                        <Link target="_blank" to="https://www.facebook.com/neferkadesign">
                          FACEBOOK
                </Link>
                      </footer> */}
                    </div>
                    <Footer/>
                  </div>
                </figure>
              </div>
            </div>
          </section>
        </div>
      </Layout >
    )
  }
}

DervishProduct.propTypes = {
  data: PropTypes.object.isRequired
}

export default DervishProduct

export const pageQuery = graphql`
  query dervishQuery($slug: String!){
    contentfulDervish(slug: {eq: $slug}) {
      title
      slug
      price
      category
      carousel {
        fluid {
          src
        }
      }
    }
  }
`


    // const {
    //   title,
    //   price,
    //   category,
    //   // careousel
    // } = this.props.data.contentfulFibonacci

    // contentfulFibonacci: contentfulFibonacci(slug: {eq: $slug}) {
    //   title
    //   slug
    //   price
    //   category
    // }