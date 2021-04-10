import React from 'react'
import Layout from "../components/layout"
import storiesStyle from '../components/styles/stories.module.css'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'


const propTypes = {
  data: PropTypes.object.isRequired,
}

const Product = ({ node }) => {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neferka - Stories</title>
        <link rel="canonical" href="http://neferka.design/stories" />
      </Helmet>
      <figure>
        <Link to={`/${node.slug}`}>
          <Image className={storiesStyle.image} fluid={node.image.fluid} alt={node.title} />
        </Link>
        <span>
          <p className={storiesStyle.titleP}>{node.title}</p>
          <p className={storiesStyle.dateP}>{node.date}</p>
        </span>
      </figure>
    </div >
  )
}

class Stories extends React.Component {
  render() {
    const Story1 = this.props.data.story1.edges
    const Story2 = this.props.data.story2.edges
    const Story3 = this.props.data.story3.edges
    const Story4 = this.props.data.story4.edges
    const Story5 = this.props.data.story5.edges

    return (
      <Layout>
        <div className={storiesStyle.storyWrapper}>
          <div className={storiesStyle.upperWrapper}>
            <section className={storiesStyle.upperBody}>
              <h1 className={storiesStyle.h1}>STORIES</h1>
              <p className={storiesStyle.p}>
                One off pieces designed after stories. Some are custom design inquiries uniquely crafted to express a story, some are designed to express and manifest the poetry that lies in a tale, perhaps taking place somewhere.
                    </p>
            </section>
          </div>
          <section className={storiesStyle.lowerBody}>
            <ul>
              <li>
                {Story1.map(({ node }, i) => (
                  <Product node={node} key={node.id} />
                ))}
              </li>
              <li>
                {Story2.map(({ node }, i) => (
                  <Product node={node} key={node.id} />
                ))}
              </li>
              <li>
                {Story3.map(({ node }, i) => (
                  <Product node={node} key={node.id} />
                ))}
              </li>
              <li>
                {Story4.map(({ node }, i) => (
                  <Product node={node} key={node.id} />
                ))}
              </li>
              <li>
                {Story5.map(({ node }, i) => (
                  <Product node={node} key={node.id} />
                ))}
              </li>
            </ul>
          </section>
        </div>
      </Layout >
    )
  }
}

Stories.propTypes = propTypes

export const query = graphql`
{
    story1: allContentfulStory1 {
      edges {
        node {
          image {
            fluid {
              src
            }
          }
          title
          date
          slug
        }
      }
    }

    story2: allContentfulStory2 {
      edges {
        node {
          image {
            fluid {
              src
            }
          }
          title
          date
          slug
        }
      }
    }
    story3: allContentfulStory3 {
      edges {
        node {
          image {
            fluid {
              src
            }
          }
          title
          date
          slug
        }
      }
    }
    story4: allContentfulStory4 {
      edges {
        node {
          image {
            fluid {
              src
            }
          }
          title
          date
          slug
        }
      }
    }
    story5: allContentfulStory5 {
      edges {
        node {
          image {
            fluid {
              src
            }
          }
          title
          date
          slug
        }
      }
    }
    
  }
`

export default Stories
