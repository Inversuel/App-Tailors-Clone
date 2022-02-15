import styled from "styled-components"
import { device } from "../breakpoints"

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 25px 50px;
`
export const MainText = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  width: 100%;
  margin-bottom: 30%;
  @media ${device.laptop}{
    margin-bottom:10%;
    text-align:center;
    font-size:3rem;
  }
`
export const Image = styled.img`
  width:100%;
  max-width:720px;
  margin-bottom: 30%;
  @media ${device.laptop}{
    margin-bottom:10%;
  }
`
export const WaterMark = styled.h1`
  font-size: 2.4rem;
  opacity: 0.05;
  margin: -36px 0px 0px -16px;
`
export const ServiceHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color:inherit;
`
export const ServiceParagraph = styled.p`
  margin-bottom: 18px;
  font-size: 1.2rem;
  margin-top: 10px;
  color:inherit;
  
`
export const ServiceContainer = styled.article`
  margin-top: 50px;
  cursor: pointer;
  h1, p, span {
    :hover {
      color:#4d57fb ;
    }
  }
  :hover {
      color:#4d57fb ;
    }

  @media ${device.laptop}{
    max-width:760px;
  }
`
export const Arrow = styled.span`
  font-size:inherit;
  color:inherit;
  font-weight:700;
  margin-left:13px;
`