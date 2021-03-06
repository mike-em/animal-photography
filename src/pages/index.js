import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/About'
import Offer from '../components/Offer'
import FollowUs from '../components/FollowUs'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

import '../components/layout.css'

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Offer />
    <FollowUs />
    <Gallery />
    <Contact />
  </Layout>
)

export default IndexPage
