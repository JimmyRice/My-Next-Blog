import { graphql, useStaticQuery } from "gatsby"

const useAllFriend = () => {
  const friends = useStaticQuery(graphql`
    query {
      directus {
        friend {
          name
          url
          bio
        }
      }
    }
  `).directus.friend

  return friends
}

export default useAllFriend
