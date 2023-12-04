import { styled } from 'styled-components'
import { ReactComponent as Logo } from '../../assets/icons/sprite.svg'

export const HeaderSectionWrapper = styled.div`
  position: fixed;
  top: 0;
`
export const HeaderSection = styled.header`
  position: absolute;
  align-items: center;
  padding-top: 36px;
  display: flex;
  column-gap: 11px;
`
export const LogoIconWrapper = styled.a``
export const LogoIcon = styled(Logo)`
  fill: #173d33;
  &:hover {
    fill: #97d28b;
  }
`
export const MenuIconWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  height: 39px;
  padding: 4px 12px;

  gap: 12px;

  border-radius: 50%;
  background: #dcefd8;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
