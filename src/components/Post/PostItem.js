import * as React from "react"
import Button from "../Button/Button"
import { PostItemStyles } from "./PostStyles"

const BlogItem = (article) => {
  const { title, slug, date } = article.article

  return (
    <PostItemStyles to={"/blog/" + slug}>
      <h4>{title}</h4>
      <div className="blogitem__meta">
        <Button as="span" text="Read More" arrow={true} />
        <p>{ new Date(date).toDateString() }</p>
      </div>
    </PostItemStyles>
  )
}

export default BlogItem
