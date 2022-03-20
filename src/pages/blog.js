import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import AllPosts from "../components/Post/AllPosts"
import {StaticImage} from "gatsby-plugin-image";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";



const Blog = () => {
    return (
        <>
            <Seo title="Blog" />
            <Layout>
                <AllPosts
                    title="All blog posts from Jimmy"
                />
            </Layout>
        </>
    )
}

export default Blog
