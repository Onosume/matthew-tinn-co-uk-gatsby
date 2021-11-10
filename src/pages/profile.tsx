import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Page } from "../components/layouts/Page"
import Seo from "../components/seo"

import "../styles/pages/profile.scss";

const ProfilePage = () => (
    <Page>
        <Seo title="Profile" />
        <div className="profile-container">
            <h1>Profile</h1>
            <div>
                <h2>Introduction</h2>
                <p>Hi, I'm Matthew Tinn. I'm a programmer specialising in web development and cloud technologies, as well as a writer and Japanese culture critic.</p>
                <h2>Coding</h2>
                <p>I currently work for Saggezza (An Infostretch Company) as a Full Stack Developer, crafting exciting new digital experiences and delivering high-tech solutions for clients around the world in sectors such as fashion, retail, e-commerce, customer communications and digital services.</p>
                <p>I mostly work with React, Vue and a variety of the services avaible on AWS, developing and maintaining a serverless back-end infrastructure.</p>
                <p>My main areas of interest in computing and technology are localisation, internet privacy and security, and the use of technology in education.</p>
                <h2>Japan</h2>
                <p>As a writer and Japanese culture critic I currently write reveiws and articles on anime and manga for Anime UK News. The site is run by a small collection of dedicated volunteers and Japanese culture enthusiasts and is the leading local voice amongst UK anime fans.</p>
                <p>I also run a Japnese culture focused blog, Genki Cupboard, where I review anime, Japanese music and video games, as well as producing an occassional podcast.</p>
            </div>
        </div>
    </Page>
)

export default ProfilePage