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
                    <h1 style={{
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
                  <section>
                    <div className={productStyle.imageContainer}>
                      {carousel.map((image) => {
                        return (
                          <Img fluid={image.localFile.childImageSharp.fluid} />
                        )
                      })}
                    </div>
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
                  </section>
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
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
          id
        }
      }
    }
  }
`
