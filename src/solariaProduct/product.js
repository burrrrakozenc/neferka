import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/productLayout'
import styled from 'styled-components';
import productStyle from '../components/styles/product.module.css'

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


class SolariaProduct extends Component {
  render() {

    const {
      title,
      price,
      category,
      carousel,
    } = this.props.data.contentfulSolaria

    return (
      <Layout>
        <div>
          <section className={productStyle.productBody}>
            <div className={productStyle.div1}>
              <div>
                <figure>
                  <article>
                    <h1>{title}</h1>
                    <h4>{price}</h4>
                    <h4>{category}</h4>
                    <Button>Purchase</Button>
                  </article>
                  <div>
                    {carousel.map((image) => {
                      return (
                        <Img fluid={image.fluid} />
                      )
                    })}
                    <div className={productStyle.push}>
                      <footer className={productStyle.footer}>
                        <Link target="_blank" to="https://www.instagram.com/neferka_design/">
                          INSTAGRAM
                </Link>
                        <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                        <Link target="_blank" to="https://www.facebook.com/neferkadesign">
                          FACEBOOK
                </Link>
                      </footer>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </section>
        </div>
        {/* <div className={productStyle.push}>

        </div> */}
      </Layout >
    )
  }
}

SolariaProduct.propTypes = {
  data: PropTypes.object.isRequired
}

export default SolariaProduct

export const pageQuery = graphql`
  query SolariaQuery($slug: String!){
    contentfulSolaria(slug: {eq: $slug}) {
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
