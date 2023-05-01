import React from 'react'
import {
    LinearTextGradient,
    RadialTextGradient,
    ConicTextGradient,
} from "react-text-gradients-and-animations";
const Bio = () => {
    return (
        <div className='m-6 pt-5'>
            <h2 className='text_gr pb-6'>Bio:</h2>
            <div className='flex flex-col gap-y-8 text-xl md:w-9/12 text_gr pb-6 font-medium'>
                <p>Hello, my name is <RadialTextGradient
                    shape={"circle"}
                    position={"top"}
                    colors={["#fff", "#ecc94b"]}
                    animate={true}
                    animateDirection={"horizontal"}
                    animateDuration={6}
                >Kanhaiya Verma</RadialTextGradient>, and I'm a <RadialTextGradient
                    shape={"circle"}
                    position={"top"}
                    colors={["#fff", "#ecc94b"]}
                    animate={true}
                    animateDirection={"horizontal"}
                    animateDuration={6}
                >software engineer</RadialTextGradient> based in <RadialTextGradient
                    shape={"circle"}
                    position={"top"}
                    colors={["#fff", "#ecc94b"]}
                    animate={true}
                    animateDirection={"horizontal"}
                    animateDuration={5}
                >Uttar Pradesh, India.</RadialTextGradient> I'm passionate about using technology to solve real-world problems and create innovative solutions.</p>
                <p>
                    After completing my education in <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >computer science</RadialTextGradient>, I worked as a software engineer, developing and implementing <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >cutting-edge solutions</RadialTextGradient> for clients across various industries. During this time, I gained valuable experience in <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >software development</RadialTextGradient>, <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >project management</RadialTextGradient>, and <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >team-building.</RadialTextGradient></p>
                <p>
                    I'm now seeking new job opportunities where I can apply my skills and experience to make a meaningful impact. I'm proficient in several programming languages, including <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >Java</RadialTextGradient>, <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >JavaScript</RadialTextGradient>, and have experience working with various frameworks such as <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >React</RadialTextGradient>, <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >Laravel</RadialTextGradient> and other technologies.
                    I'm a <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >quick learner</RadialTextGradient> and enjoy staying up-to-date with the latest trends and developments in the industry. I'm also a strong communicator and enjoy collaborating with others to achieve common goals.</p>
                <p>
                    In addition to my technical skills, I'm committed to delivering <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >high-quality</RadialTextGradient> work and providing exceptional <RadialTextGradient
                        shape={"circle"}
                        position={"top"}
                        colors={["#fff", "#ecc94b"]}
                        animate={true}
                        animateDirection={"horizontal"}
                        animateDuration={5}
                    >customer service</RadialTextGradient>. I'm passionate about using technology to improve people's lives and make the world a better place.
                </p>
                <p>
                    I'm excited to explore new job opportunities and to contribute my skills and experience to a dynamic and innovative team.
                </p>
            </div>
            <a href='https://www.linkedin.com/in/kanhaiyaverma/' target="_blank" className='pt-6'>@kanhaiyaVerma</a>
        </div>
    )
}
export default Bio

