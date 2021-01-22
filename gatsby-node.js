const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const dervishTemplate = path.resolve('src/dervish-product/product.js')
        const fibonacciTemplate = path.resolve('src/fibonacci-product/product.js')
        const illusionsTemplate = path.resolve('src/illusions-product/product.js')
        const equilibriumTemplate = path.resolve('src/equilibrium-product/product.js')
        const solariaTemplate = path.resolve('src/solariaProduct/product.js')

        resolve(
            graphql(`
        {
            dervish: allContentfulDervish( limit: 100) {
                edges {
                  node {
                    slug
                    id
              }
            }
          }
          fibonacci: allContentfulFibonacci( limit: 100) {
            edges {
              node {
                id
                slug
                }
            }
        }
        illusions: allContentfulIllusions( limit: 100) {
            edges {
              node {
                id
                slug
            }
            }
        }
        equilibrium: allContentfulEquilibrium( limit: 100) {
            edges {
              node {
                id
                slug
            }
            }
        }
        solaria: allContentfulSolaria( limit: 100) {
            edges {
              node {
                id
                slug
            }
            }
        }

        }
      `).then((result) => {
                result.data.dervish.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: dervishTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                result.data.fibonacci.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: fibonacciTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                result.data.illusions.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: illusionsTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                result.data.equilibrium.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: equilibriumTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                result.data.solaria.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: solariaTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )
    })
}





