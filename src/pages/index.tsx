import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/section/hero"
import Products from "../components/section/products"
import Services from "../components/section/services"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Products />
    <Services />
  </Layout>
)

export default IndexPage
