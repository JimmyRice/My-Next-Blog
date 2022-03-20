const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const categories = (
        await graphql(`
            query {
                directus {
                    category {
                        id
                        slug
                    }
                }
            }
        `)
    ).data.directus.category

    const articles = (
        await graphql(`
            query {
                directus {
                    article {
                        id
                        slug
                    }
                }
            }
        `)
    ).data.directus.article

    articles.forEach(article => {
        createPage({
            path: `/blog/${article.slug}`,
            component: path.resolve('./src/templates/post-template.js'),
            context: {
                id: article.id
            }
        })
    })
}