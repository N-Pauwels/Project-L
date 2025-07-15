import NavBar from './components/NavBar.jsx'
import Picture from './sections/Picture.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import NewHero from './sections/NewHero.jsx'
import Loader from './components/Loader.jsx'
import { useState } from 'react'
import MySkills from './sections/MySkills.jsx'

const App = () => {
  const [ready,setReady] = useState(false)

  return (
    <>
      <NavBar/>
      <NewHero
        ready={ready}
        setReady={setReady}
      />
      {/* <Hero/> */}
      <Picture/>
      <MySkills/>
      {/* <Experience/> */}
      <ShowcaseSection/>
      {/* <FeatureCards/> */}
      <TechStack/>
      {!ready && <Loader/>} 
    </>
  )
}

export default App