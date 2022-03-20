import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Hey there!"
          subTitle="This is Jimmy0w0 neXt"
        />
        <LatestPosts
          title="Recent Posts"
        />
      </Layout>
    </>
  )
}

export default Index
