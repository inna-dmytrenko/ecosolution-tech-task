// import logo from './logo.svg'

import { Container } from './App.styled'
import Header from '../Header/Header'
import Main from '../Main/Main'
import About from '../About/About'
import Services from '../Services/Services'
import Case from '../Case/Case'
import FAQ from '../FAQ/FAQ'
import Contact from '../Contact/Contact'
import Form from '../Form/FormContact'

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <About />
      <Services />
      <Case />
      <FAQ />
      <Contact />
      <Form />
    </Container>
  )
}

export default App
