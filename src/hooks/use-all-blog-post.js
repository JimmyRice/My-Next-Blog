import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const articles = useStaticQuery(graphql`
    query {
      directus {
        article(sort: ["-id"]) {
          id
          slug
          title
          tag
          date
          excerpt
          author {
            name
          }
        }
      }
    }
  `).directus.article

  return articles
}

export default useAllBlogPost
