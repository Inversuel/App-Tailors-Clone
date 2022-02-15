import styled from "styled-components"
import { device } from "../breakpoints"

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 75px 25px;

  @media ${device.laptop}{
    max-width:960px;
  }
`
export const MainText = styled.span`
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1;
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: center;
`

export const Paragraph = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 10px;
`

export const Grid = styled.div`
  display: grid;
  padding: 50px 25px 0px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  place-items: center;
  align-items: center;
  row-gap: 50px;
  column-gap: 30px;
`

export const GridText = styled.span`
  place-self: center;
  font-size: 1.3rem;
  font-weight: 700;
`
