import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

export const Container = styled.header`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  z-index: 3;
  padding: 10px 26px;
`
export const Logo = styled(Link)`
  width: 100px;
  height: 60px;
  font-size: 2.4rem;
  color: #141a52;
  :active {
    color: white;
  }
`
export const Burger = styled(FaBars)`
  height: 30;
  width: auto;
  cursor: pointer;
`
