import * as React from "react"
import { Burger, Container, Logo } from "../../styles/components/header.Styled"
import Nav from "../nav"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => {
  const [show, setShow] = React.useState(false)
  const showNav = () => (show ? setShow(false) : setShow(true))

  return (
    <>
      <Container>
        <Logo to="/">{siteTitle}</Logo>
        <Burger onClick={showNav} />
      </Container>
      {show && <Nav />}
    </>
  )
}

export default Header
