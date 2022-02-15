import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-bottom: 16px;
  position: fixed;
  margin-bottom: 30px;
  transition: opacity 1s ease-in;
`
export const LinkT = styled(Link)`
  margin: 13px;
  font-size: 1, 5 rem;
  :hover {
    color: #4d57fb;
  }
`

export const LinkB = styled(Link)`
  border: medium none;
  border-radius: 30px;
  background-color: #141a51;
  align-items: flex-start;
  text-align: center;
  color: white;
  padding: 13px 13px;
  width: 50%;
  svg {
    fill: #06df77;
    margin-bottom: -3px;
  }
  :hover {
    background-color: #06df77;
    color: darkblue;
    svg {
      fill: darkblue;
    }
  }
`
