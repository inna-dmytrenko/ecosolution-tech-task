// import { Container } from "../Container/Container.styled";
import {
  HeaderSection,
  LogoIcon,
  MenuIconWrapper,
  HeaderSectionWrapper,
  LogoIconWrapper,
} from './Header.styled'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  return (
    <HeaderSectionWrapper>
      <HeaderSection>
        <LogoIconWrapper>
          <LogoIcon />
        </LogoIconWrapper>

        <MenuIconWrapper>
          <MenuIcon fontSize="14" />
        </MenuIconWrapper>
      </HeaderSection>
    </HeaderSectionWrapper>
  )
}

export default Header
