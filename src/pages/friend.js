import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import AllFriend from "../components/Friend/AllFriend";

const Friend = () => {
    return (
        <>
            <Seo title="Friends" />
            <Layout>
                <SimpleBanner title="Friends">
                    <StaticImage
                        className="banner__image"
                        src="../../static/85948065_p0.jpeg"
                        alt="Ro&SOPII"
                    />
                </SimpleBanner>
                <AllFriend
                    title="My Friends"
                />
            </Layout>
        </>
    )
}

export default Friend
