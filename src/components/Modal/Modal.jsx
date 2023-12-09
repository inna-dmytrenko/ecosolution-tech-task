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
  ModalWrapper,
  MenuWrapper,
} from './Modal.styled'

const Modal = () => {
  return (
    <>
      <ModalWrapper>
        <Button>
          {' '}
          <ButtonSvg /> close
        </Button>
        <HRMenu></HRMenu>
        <MenuWrapper>
          <NavModal>
            <List>
              <Item>
                <ModalLink>
                  Main
                  <ArrowRight />
                </ModalLink>
              </Item>
              <Item>
                <ModalLink>
                  About
                  <ArrowRight />
                </ModalLink>
              </Item>
              <Item>
                <ModalLink>
                  Cases
                  <ArrowRight />
                </ModalLink>
              </Item>
              <Item>
                <ModalLink>
                  FAQ
                  <ArrowRight />
                </ModalLink>
              </Item>
              <Item>
                <ModalLink>
                  Contact Us
                  <ArrowRight />
                </ModalLink>
              </Item>
            </List>
          </NavModal>
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
        </MenuWrapper>
      </ModalWrapper>
    </>
  )
}
export default Modal
