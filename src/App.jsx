import NavBar from './components/NavBar.jsx'
import Experience from './sections/Experience.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import NewHero from './sections/NewHero.jsx'
import Loader from './components/Loader.jsx'
import { useState } from 'react'

const App = () => {
  const [ready,setReady] = useState(false)

  return (
    <>
      <NavBar/>
      <NewHero
        ready={ready}
        setReady={setReady}
      />
      <Hero/>
      <ShowcaseSection/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      {!ready && <Loader/>} 
    </>
  )
}

export default App