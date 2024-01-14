import { styled } from 'styled-components'
import { ReactComponent as IconClose } from '../../assets/icons/close-light.svg'

import { ReactComponent as Arrow } from '../../assets/icons/arrow-right.svg'
import { ReactComponent as FB } from '../../assets/icons/facebook.svg'
import { ReactComponent as Inst } from '../../assets/icons/instagram.svg'

export const ModalWrapper = styled.div`
  width: 320px;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px);
  padding: 24px;
  /* padding-right: 24px; */
`
export const NavModal = styled.nav``
export const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* -webkit-box-pack: justify; */
  justify-content: space-between;
`
export const Button = styled.button`
  display: flex;
  padding: 0;
  margin-left: -5px;
  align-items: end;

  column-gap: 4px;
  color: #fff;

  font-family: Fira Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  border: none;
  background-color: transparent;
`
export const ButtonSvg = styled(IconClose)``

export const ArrowRight = styled(Arrow)`
  /* width: 16px;
  height: 17px;
  stroke: #ffffff; */
`
export const HRMenu = styled.hr`
  width: 100%;
  fill: #ffffff;
  margin-bottom: 25px;
`
export const List = styled.ul`
  display: grid;
  color: #ffffff;

  /* font-family: Fira Sans; */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;

  grid-row-gap: 8px;
`
export const Item = styled.li``
export const ModalLink = styled.a`
  /* font-family: Fira Sans; */
  /* font-size: 24px;
  font-style: normal; */
  /* font-weight: 300; */
  color: #ffffff;
  display: flex;
  column-gap: 8px;

  align-items: baseline;
  stroke: #ffffff;
  &:hover {
    stroke: #97d28b;
    color: #97d28b;
  }
`
export const SocialList = styled.ul`
  display: flex;
  column-gap: 8px;
`
export const SocialItem = styled.li``
export const SocialLink = styled.a`
  display: flex;
`
export const Facebook = styled(FB)``
export const Instagram = styled(Inst)``
