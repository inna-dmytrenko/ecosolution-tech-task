import { styled } from 'styled-components'
import { ReactComponent as IconClose } from '../../assets/icons/close-light.svg'
import { ReactComponent as HR } from '../../assets/icons/HR-mob.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrow-right.svg'
import { ReactComponent as FB } from '../../assets/icons/facebook.svg'
import { ReactComponent as Inst } from '../../assets/icons/instagram.svg'

export const ModalWrapper = styled.div`
  width: 320px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px);
`
export const NavModal = styled.nav`
  /* width: 320px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px); */
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
`
export const ButtonSvg = styled(IconClose)``

export const ArrowRight = styled(Arrow)`
  width: 16px;
  height: 16px;

`
export const HRMenu = styled(HR)`
  width: 272px;
`
export const List = styled.ul`
  display: grid;
  padding-left: 25px;
  grid-row-gap: 11px;
`
export const Item = styled.li``
export const ModalLink = styled.a`
  color: #fff;
  display: flex;
  column-gap: 8px;
`
export const SocialList = styled.ul`
  display: flex;
`
export const SocialItem = styled.li``
export const SocialLink = styled.a``
export const Facebook = styled(FB)``
export const Instagram = styled(Inst)``
