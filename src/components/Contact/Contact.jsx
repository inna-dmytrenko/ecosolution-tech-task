import {
  Title,
  Address,
  Tel,
  Mail,
  Map,
  IconMap,
  IconTel,
  IconMail,
  IconFasebook,
  Fasebook,
  IconInstagram,
  Instagram,
  SubTitle,
} from './Contact.styled'

const Contact = () => {
  return (
    <>
      <Title>Contact us</Title>
      <Address>
        <SubTitle>Phone:</SubTitle>
        <Tel tel="+38 (098) 12 34 567">
          <IconTel />
          38 (098) 12 34 567
        </Tel>
        <Tel tel="+38 (093) 12 34 567">
          <IconTel />
          38 (093) 12 34 567
        </Tel>
        <SubTitle>E-mail:</SubTitle>
        <IconMail />
        <Mail mailto="office@ecosolution.com">office@ecosolution.com</Mail>
        Address:
        <SubTitle></SubTitle>
        <IconMap />
        <Map href="#">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Map>
      </Address>
      <Address>
        <SubTitle>Social Networks:</SubTitle>
        <Fasebook>
          <IconFasebook />
        </Fasebook>
        <Instagram>
          <IconInstagram />
        </Instagram>
      </Address>
    </>
  )
}

export default Contact
