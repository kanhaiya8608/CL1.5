import React from 'react'
import {
    RadialTextGradient,
} from "react-text-gradients-and-animations";
function Header() {
    return (
        <div className='m-6 pt-10 flex flex-col gap-y-12 md:pt-20 select-none'>
            <img src="./assets/images/profile.jpg" alt="" width='80px' className='rounded-full' />
            <h1 className=' hud text-3xl font-medium md:text-5xl'>


                👋 I'm <RadialTextGradient
                    shape={"circle"}
                    position={"top"}
                    colors={["#9f1239", "#facc15"]}
                    animate={true}
                    animateDirection={"horizontal"}
                    animateDuration={6}
                >
                    Kanhaiya
                </RadialTextGradient>, a highly skilled <RadialTextGradient
                    shape={"circle"}
                    position={"top"}
                    colors={["#9f1239", "#facc15"]}
                    animate={true}
                    animateDirection={"horizontal"}
                    animateDuration={5}
                >
                    web developer</RadialTextGradient> based in India, with a focus on creating <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#9f1239", "#facc15"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >
                    user-friendly</RadialTextGradient> websites and a passion for unique and visually <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#9f1239", "#facc15"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >
                    stunning designs.
                </RadialTextGradient>


            </h1>
        </div>
    )
}

export default Header;