
const AboutMe = () => {
  return (
    <section id="about-me" className="relative">
        <div className="h-screen w-full">
            <div className="sticky top-20 text-7xl sm:text-9xl flex flex-row justify-start mx-20">
                <div id="text-la-head" className="relative">
                    <h1 className="bg-black cinzel-epic moon-cover-left -me-80">LAMOON</h1>    
                </div>
                <div id="text-moon-head" className="relative">
                    <h1 className="cinzel-epic moon-cover-right -ms-80">LAMOON</h1>
                </div>
            </div>
            <div className="mt-40 mx-20 grid grid-cols-2">
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