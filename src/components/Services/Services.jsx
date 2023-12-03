import { Title, Quantity, ServiceDesc, List, Item, BGEnergy } from './Services.styled'

const Services = () => {
  return (
    <>
      <Title>Electricity we produced for all time</Title>
      <Quantity>1.134.147.814</Quantity>
      <Title>The services we provide</Title>
      <BGEnergy>Energy</BGEnergy>
      <List>
        <Item>Solar</Item>
        <Item>Wind</Item>
        <Item>Hydro</Item>
        <Item>Thermal</Item>
        <Item>Nuclear</Item>
      </List>
      <ServiceDesc>
        Development and implementation of renewable enviroMentally friendly
        energy sources
      </ServiceDesc>
    </>
  )
}

export default Services
