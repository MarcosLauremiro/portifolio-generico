import { HeaderTop } from "./componentes/Header"
import { username,user } from "./data/user.js"
import { BannerSection } from "./componentes/BannerSection"
import './styles/reset.css'
import './styles/index.css'
import './styles/globalStyle.css'
import './styles/button.css'
import { About } from "./componentes/AboutMeSection"
import { Projects } from "./componentes/ProjectsSection"
import { Footer } from "./componentes/Footer"
import { Techs } from "./componentes/TechsSection"

function App() {

  return (
    <>
      <HeaderTop />
      <BannerSection userName={ username } />
      <About />
      <Techs />
      <Projects />
      <Footer nameUser={user}/>
    </>
  )
}

export default App
