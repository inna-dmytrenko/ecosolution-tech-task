import { styled } from 'styled-components'
import { ReactComponent as IconClose } from '../../assets/icons/close-light.svg'
import { ReactComponent as HR } from '../../assets/icons/HR-mob.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrow-right.svg'
import { ReactComponent as FB } from '../../assets/icons/facebook.svg'
import { ReactComponent as Inst } from '../../assets/icons/instagram.svg'

export const NavModal = styled.nav`
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px);
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
export const List = styled.ul``
export const Item = styled.li``
export const ModalLink = styled.a``
export const SocialList = styled.ul``
export const SocialItem = styled.li``
export const SocialLink = styled.a``
export const Facebook = styled(FB)``
export const Instagram = styled(Inst)``
