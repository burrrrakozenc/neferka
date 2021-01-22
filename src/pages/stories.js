import React from 'react'
import Layout from "../components/layout"
import storiesStyle from '../components/styles/stories.module.css'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Product = ({ node }) => {

  return (
    <div>
      <figure>
        <Link to={`/${node.slug}`}>
          <Image className={storiesStyle.image} fluid={node.image.fluid} alt={node.title} />
        </Link>
        <span>
          <p className={storiesStyle.titleP}>{node.title}</p>
          <p>{node.date}</p>
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
        <div>
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
      </Layout >
    )
  }
}

Stories.propTypes = propTypes

export const query = graphql`
{
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















// const Stories = ({ data }) => {
//   const { allContentfulHome: { nodes: home },
//   } = data

//   return (
//     <Layout>
//       <Link to={'/stories1'}>story1</Link>
      // <div>
      //   <section className={storiesStyle.upperBody}>
      //     <h1 className={storiesStyle.upperBody.h1}>stories</h1>
      //     <p className={storiesStyle.upperBody.p}>
      //       bir takim aciklayici yazilar. - Tüm yaşamım nafile bir arayıştan, anlamsızca konuşmalardan başka bir şey değildi. Kızgınlık ya da sitem duymuyorum. Çünkü çoğu insanın yaşamı benimki gibi. Ama kalan süremi anlamlı bir işte kullanmak istiyorum.
      //               </p>
      //   </section>
      // </div>
//       <div>
//         {home.map((hom) => {
//           return (
//             <section className={storiesStyle.lowerBody} key={hom.id}>
//               <ul>
//                 <li >
//                   <figure>
//                     <Link to={`/${hom.category}`}>
//                       <Image fluid={hom.categoryImage.fluid} alt={hom.category} />
//                     </Link>
//                     <p>{hom.category}</p>
//                   </figure>
//                 </li>
//               </ul>
//             </section>
//           )
//         })}
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
// {
//   allContentfulHome {
//     nodes {
//       id
//       category
//       categoryImage {
//         fluid {
//           src
//         }
//       }
//     }
//   }
// }
// `
