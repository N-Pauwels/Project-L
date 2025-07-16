
const AboutMe = () => {
  return (
    <section id="about-me" className="relative">
        <div className="h-screen w-full">
            <div className="bg-black md:bg-transparent sticky top-15 h-[10vh] md:h-auto text-7xl sm:text-9xl flex flex-row items-end justify-start mx-5 md:mx-20">
                <div id="text-la-head" className="relative">
                    <h1 className="bg-black cinzel-epic moon-cover-left -me-45 md:-me-80">LAMOON</h1>    
                </div>
                <div id="text-moon-head" className="relative">
                    <h1 className="cinzel-epic moon-cover-right -ms-45 md:-ms-80">LAMOON</h1>
                </div>
            </div>
            <div className="mt-65 md:mt-40 mx-5 md:mx-20 md:grid md:grid-cols-2">
                <div>
                    <p className="text-white-50 text-lg">
                        Lamoon's musical roots lie in classical piano—a love that has never left him.
                        Though his earlier project, Jennisan, allowed him to explore different sounds, it never gave the piano the space it truly deserved.
                        <br/>
                        Over time, through countless writing sessions, he discovered that his heart beats just as strongly for soulful pop-funk as it does for intimate piano ballads.
                        <br/>
                        <br/>
                        But trying to blend those two worlds under one name felt limiting.
                        <br/>
                        <br/>
                        Lamoon was born from the need to give the piano its rightful voice again—to create music where emotional depth and groove can coexist, each given room to breathe. It’s a space where the classical meets the contemporary, and where every note tells a story.
                    </p>
                </div>
                <div/>
            </div>
        </div>
    </section>
  )
}

export default AboutMe