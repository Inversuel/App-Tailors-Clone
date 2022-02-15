import React from "react"
import {
  Container,
  MainText,
  Paragraph,
  Grid,
  GridText,
} from "../../styles/components/products.Styled"

function Products() {
  return (
    <>
      <Container>
        <MainText>Design, Develop and Deliver</MainText>
        <Paragraph>
          The team at AppTailors work to build long lasting partnerships with
          our clients to fully understand the business needs and collaborate in
          an effective way throughout the entirety of your project
        </Paragraph>
        <Grid>
          <GridText>BackTrace</GridText>
          <GridText>Vagus</GridText>
          <GridText>The Elegraph</GridText>
          <GridText>Motzi</GridText>
        </Grid>
      </Container>
    </>
  )
}

export default Products
