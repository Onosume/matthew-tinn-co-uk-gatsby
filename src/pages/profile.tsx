import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Page } from "../components/layouts/Page"
import Seo from "../components/seo"

import "../styles/pages/profile.scss"

const ProfilePage = () => (
  <Page>
    <Seo title="Profile" />
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="center-text">Profile</h1>
        <h2>Introduction</h2>
        <p>
          Hi, I'm Matthew Jennifer Tinn. I'm a programmer specialising in web
          development and cloud technologies, as well as a writer and Japanese
          culture critic. I am non-binary and use they/them pronouns.
        </p>
        <h2>Coding</h2>
        <p>
          I currently work for the BBC, based in the new Product Group cohort in
          Newcastle-upon-Tyne. As part of the Audience Data team I help manage
          the back-end cloud services that power user personalisation across BBC
          products such as iPlayer and Sounds.
        </p>
        <p>
          Before this I spent 8 years working at Saggezza (now known as Apexon)
          as a Full Stack Developer, crafting exciting new digital experiences
          and delivering high-tech solutions for clients around the world in
          sectors such as fashion, retail, e-commerce, customer communications
          and digital services.
        </p>
        <p>
          I've worked across a mix of front and back end web technologies. I am
          knee-deep in the AWS world, managing serverless back-end
          infrastrcutures using both Node.JS and Java, while I'm also adept in
          building front ends in things like React and Vue.
        </p>
        <p>
          I've also gained commercial exposure to C# and .NET MVC projects, and
          I've also dabbled a bit in Python.
        </p>
        <p>
          I have a 2:1 degree in Games Programming from Northumbria Univeristy,
          which provided me experience in coding in C++, as well as building my
          core computer science knowledge.
        </p>
        <h2>Japan</h2>
        <p>
          As a writer and Japanese culture critic I currently write reveiws and
          articles on anime and manga for Anime UK News. The site is run by a
          small collection of dedicated volunteers and Japanese culture
          enthusiasts and is the leading local voice amongst UK anime fans.
        </p>
        <p>
          I also run a Japnese culture focused blog, Genki Cupboard, where I
          review anime, Japanese music and video games, as well as producing an
          occassional podcast.
        </p>
        <p>
          I am an occassional guest on the UK anime music radio show Neko Desu.
        </p>
        <p>
          During my university days I was president of the Northumbria Students'
          Union's Japanese Animation and Culture Society, while I also hosted a
          Japanese music radio show, Genki Up North, on Newcastle Student Radio.
        </p>
      </div>
    </div>
  </Page>
)

export default ProfilePage
