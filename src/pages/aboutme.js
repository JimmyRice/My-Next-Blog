import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import BasicCodeModule from "../components/BasicTextModule/BasicCodeModule";
import {StaticImage} from "gatsby-plugin-image";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";

const AboutMe = () => {
    return (
        <>
            <Seo title="About" />
            <Layout>
                <SimpleBanner title="About">
                    <StaticImage
                        className="banner__image"
                        src="../../static/70804812_p2_master1200.jpg"
                        alt="PARQUET"
                    />
                </SimpleBanner>
                <BasicTextModule title="I'm Jimmy" content="Is human"/>
            </Layout>
        </>
    )
}

export default AboutMe
