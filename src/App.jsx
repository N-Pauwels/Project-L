import NavBar from './components/NavBar.jsx'
import Experience from './sections/Experience.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import NewHero from './sections/NewHero.jsx'

const App = () => {
  return (
    <>
      <NavBar/>
      <NewHero/>
      <Hero/>
      <ShowcaseSection/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
    </>
  )
}

export default App