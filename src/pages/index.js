import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from '../components/styles/index.module.css'
import Image from 'gatsby-image'
import { Link } from 'gatsby'


const IndexPage = ({ data }) => {
  const { allContentfulHome: { nodes: home },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {home.map((hom) => {
          return (
            <article key={hom.id}>
              <Link to={`/${hom.slug}`}>
                <Image fluid={hom.categoryImage.fluid} alt={hom.title} className={styles.indeximages} />
                <div className={styles.indexText}>
                  <h2 className={styles.mainHeader}>{hom.category}</h2>
                  <h4 className={styles.descHeader}>{hom.desc}</h4>
                </div>
              </Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}


export const query = graphql`
{
  allContentfulHome(sort: { fields: orderNumber, order: ASC }){
    nodes {
      orderNumber
      slug
      id
      category
      categoryImage {
        fluid {
          src
        }
      }
      desc
    }
  }
}
`

export default IndexPage
