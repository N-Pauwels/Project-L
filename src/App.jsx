import NavBar from './components/NavBar.jsx'
import Picture from './sections/Picture.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import NewHero from './sections/NewHero.jsx'
import Loader from './components/Loader.jsx'
import { useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import MySkills from './sections/MySkills.jsx'

const App = () => {
  const [ready,setReady] = useState(false)

  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });
  const isSM = useMediaQuery({query:"(min-width: 640px) and (max-width : 767px)"});
  const isMD = useMediaQuery({query:"(min-width : 768px) and (max-width : 1023px)"});
  const isLG = useMediaQuery({query:"(min-width : 1024px) and (max-width : 1279px)"});
  const isXL = useMediaQuery({query:"(min-width : 1280px) and (max-width : 1535px)"});
  const is2XL = useMediaQuery({query:"(min-width : 1536px)"});

  const media = {isMobile, isSM, isMD, isLG, isXL, is2XL}
  

  return (
    <>
      <NavBar/>
      <NewHero
        ready={ready}
        setReady={setReady}
        media={media}
      />
      {/* <Hero/> */}
      <Picture/>
      <MySkills
        media={media}
      />
      {/* <Experience/> */}
      <ShowcaseSection
        media={media}
      />
      {/* <FeatureCards/> */}
      <TechStack/>
      {!ready && <Loader/>} 
    </>
  )
}

export default App