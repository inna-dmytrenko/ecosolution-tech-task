import {
  NavModal,
  ButtonSvg,
  Button,
  HRMenu,
  List,
  Item,
  ModalLink,
  ArrowRight,
  SocialList,
  SocialItem,
  SocialLink,
  Facebook,
  Instagram,
} from './Modal.styled'

const Modal = () => {
  return (
    <>
      <NavModal>
        <Button>
          {' '}
          <ButtonSvg /> close
        </Button>
        <HRMenu></HRMenu>
        <List>
          <Item>
            <ModalLink>
              Main
              <ArrowRight />
            </ModalLink>
            <ModalLink>
              About
              <ArrowRight />
            </ModalLink>
            <ModalLink>
              Cases
              <ArrowRight />
            </ModalLink>
            FAQ
            <ModalLink>
              Contact Us
              <ArrowRight />
            </ModalLink>
          </Item>
        </List>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Facebook></Facebook>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Instagram></Instagram>
            </SocialLink>
          </SocialItem>
        </SocialList>
      </NavModal>
    </>
  )
}
export default Modal
