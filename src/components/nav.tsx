import * as React from "react"
import { Container, LinkT, LinkB } from "../styles/components/nav.Styled"
import { AiOutlineRight } from "react-icons/ai"

const Nav = () => {
  return (
    <div>
      <Container>
        <LinkT to="/services">Services</LinkT>
        <LinkT to="/feature_projects">Featured projects</LinkT>
        <LinkT to="/blogs">Blogs</LinkT>
        <LinkB to="est_project">
          Estimate Project <AiOutlineRight />
        </LinkB>
      </Container>
    </div>
  )
}

export default Nav
