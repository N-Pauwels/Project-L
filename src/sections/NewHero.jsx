import MoonExperience from '../components/HeroModels/MoonExperience.jsx'

const NewHero = () => {

  return (
    <section id="new-hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>
        <div className="text-7xl sm:text-9xl">
            <div className="absolute top-40 left-5 sm:left-50 flex flex-row">
                <h1 className="cinzel-epic">LAMOON</h1>
                <div className="absolute right-1 bg-white w-full h-[90%] top-1 moon-cover-right"/>
                <div className="absolute bg-black w-full h-full moon-cover-right"/>
            </div>
            <div className="absolute bottom-20 md:bottom-50 xl:bottom-20 right-5 sm:right-10 flex flex-row">
                <h1 className="cinzel-epic">LAMOON</h1>
                <div className="absolute left-2 bg-white w-full h-[90%] top-1 moon-cover-left"/>
                <div className="absolute bg-black w-full h-full moon-cover-left"/>
            </div>
        </div>
        <div className="hero-layout">
            <MoonExperience/>
        </div>
    </section>
  )
}

export default NewHero