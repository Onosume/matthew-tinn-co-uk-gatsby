import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Page } from "../components/layouts/Page"
import Seo from "../components/seo"

import { HomepageProfile } from "../components/homepage/HomepageProfile"

import "../styles/pages/index.scss";

const IndexPage = () => (
    <Page>
        <Seo title="Home" />
        <div className="index-container">
            <HomepageProfile />
        </div>
    </Page>
)

export default IndexPage
