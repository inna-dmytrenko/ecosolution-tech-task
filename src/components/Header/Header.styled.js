import { styled } from 'styled-components'
import { ReactComponent as Logo } from '../../assets/icons/sprite.svg'

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
`
export const LogoIcon = styled(Logo)`
  display: flex;
  /* width: 20px; */
`
export const LogoWrapper = styled.div`
  display: flex;
  width: 170px;
`
