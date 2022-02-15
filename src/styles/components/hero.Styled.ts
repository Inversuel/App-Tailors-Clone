import styled from "styled-components"
import { device } from "../breakpoints"

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #edf4f7;
  color: darkblue;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  @media ${device.laptop}{
    align-items:center;
  }
`
export const WaterMark = styled.span`
  font-size: 3rem;
  opacity: 0.05;
  text-transform: lowercase;
  font-weight: 700;
  position: absolute;
  margin-left: 10px;
  @media ${device.laptop}{
    margin: -75px 0px 0px -20px;
    padding: 20%;
  }

`
export const MainText = styled.span`
  padding: 0 1.0875rem 1.45rem;
  font-size: 3.3rem;
  font-weight: 500;
  margin-top: 40px;
  @media ${device.laptop}{
    padding: 20%;
  }
`

// @media ${device.laptop} { 
//   max-width: 800px;
// }

// @media ${device.desktop} {
//   max-width: 1400px;
// }