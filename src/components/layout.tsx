import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./section/header"
import GlobalStyled from "../styles/global"
import styled from "styled-components"
import { device } from "../styles/breakpoints"

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Main = styled.main`
    display:flex;
    flex-direction:column;

    @media ${device.laptop}{
      align-items:center;
    }
  `
  const Footer = styled.footer`
    margin-top:1rem;
  `

  return (
    <>
      <GlobalStyled />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      
    </>
  )
}

export default Layout
