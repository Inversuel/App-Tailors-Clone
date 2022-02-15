import React from "react"
import {
  Container,
  WaterMark,
  MainText,
  ServiceHeader,
  ServiceParagraph,
  ServiceContainer,
  Image,
  Arrow
} from "../../styles/components/services.Styled"
import Icon from "../../svg/example-3.svg"

function Services() {
  const data = [
    {
      id: 1,
      header: "Product Design",
      paragraph:
        "Designing at Apptailors always starts with research so we fully understand your business needs and goals before creating wireframes and prototypes",
    },
    {
      id: 2,
      header: "Product Design",
      paragraph:
        "Designing at Apptailors always starts with research so we fully understand your business needs and goals before creating wireframes and prototypes",
    },
    {
      id: 3,
      header: "Product Design",
      paragraph:
        "Designing at Apptailors always starts with research so we fully understand your business needs and goals before creating wireframes and prototypes",
    },
  ]
  return (
    <>
      <Container>
        <WaterMark>services</WaterMark>
        <MainText>Your tailored tech solution</MainText>
        <Image src={Icon} alt="Svg displaying pc" />
        {data.map(service => {
          return (
            <ServiceContainer key={service.id}>
              <ServiceHeader>{service.header}<Arrow>&#x3E;</Arrow></ServiceHeader>
              <ServiceParagraph>{service.paragraph}</ServiceParagraph>
            </ServiceContainer>
          )
        })}
      </Container>
    </>
  )
}

export default Services
