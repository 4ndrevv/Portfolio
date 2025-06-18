import React from 'react'
import GradientSpheres from '../components/GradientSpheres'
import TitleHeader from '../components/TitleHeader'

import CV from '../assets/CV.pdf';

import { Canvas } from "@react-three/fiber";
import { Progammer } from "../../public/models/Progammer";
import { OrbitControls } from '@react-three/drei';
import { bentoSocialLinks } from '../constants';

import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const About = () => {

    useGSAP(() => {
        //slide-in animations for the cards
        gsap.from("#card", {
            opacity: 0,
            y:50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: "#about",
                start: "top top",
            },
        });

        // staggered text animations
        gsap.from(".animated-text", {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: "#about",
                start: "top top",
            },
        });
    }, []);

  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
        <GradientSpheres sphere1Class={"about-gradient-sphere about-sphere-1"} sphere2Class={"about-gradient-sphere about-sphere-2"}/>
        <div className="container w-full h-full md:my-40 my-20 relative z-10">
            <TitleHeader title={"About Me"} text={"Passionate Creator, LifeLong Learner"} number={"01"}/>

            <div className="md:mt-20 mt-10">
                <div id="card" className="grid grid-cols-12 md:grid-rows-12 gap-5">
                    <div className="md:col-span-7 col-span-12 row-span-5">
                        <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-row items-center gap-6">
                                    <img src="/images/photo-profile.png" alt="flower" className="md:w-32 w-16 flower rounded-full border-4 border-blue-500" />
                                    <div>
                                        <h1 className="text-blue-50 md:text-5xl text-3xl animated-text font-semibold">HOANG Hai Nam</h1>
                                        <p className='text-xl'>13/05/1999</p>
                                    </div>
                                </div>
                                <a
                                href={CV}
                                download
                                className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-sky-800 hover:bg-sky-600 flex items-center justify-center relative group overflow-hidden"
                                >
                                {/* CV */}
                                <p
                                    className="text-white text-xl font-semibold absolute transition-all duration-300 ease-in-out
                                            group-hover:translate-y-8 opacity-100 group-hover:opacity-0 z-10"
                                >
                                    CV
                                </p>

                                {/* Icon download */}
                                <img
                                    src="/images/download.svg"
                                    alt="download"
                                    className="w-6 h-6 md:w-10 md:h-10 absolute transition-all duration-300 ease-in-out
                                            -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10"
                                />
                                </a>
                            </div>
                            <div className="mt-5">
                                
                                <p className="md:text-2xl mt-2 animated-text">
                                I am a Paris-based Fullstack developer with a focus on web and mobile application development. I have a diverse range of experience, having worked on user interface design, backend systems, DevOps pipelines, and ERP customization. I'm passionate about building end-to-end products using technologies such as Symfony, React, Docker, and Node.js.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Progammer design card */}
                    <div id="card" className="md:col-span-5 col-span-12 row-span-5">
                        <div className="bg-[#2c1e4a] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                            <div className="w-full h-full">
                            <Canvas camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}>
                                <OrbitControls 
                                    enableZoom={false} 
                                    target={[0, -6, 0]} // ← chỉnh điểm tập trung ở đây
                                />
                                <ambientLight />
                                <directionalLight position={[5, 5, 5]} />
                                <Progammer 
                                    scale={6} 
                                    position={[0, -5.5, 0]} 
                                    rotation={[0, -0.5, 0]} 
                                />
                            </Canvas>
                            </div>
                        </div>
                    </div>
                    {/* web design card */}
                    <div id="card" className="md:col-span-6 col-span-12 row-span-3">
                        <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                            <div className="flex flex-col h-full justify-center gap-2">
                                <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">Web Design & Dev</h1>
                                <p className="md:text-2xl max-w-96 animated-text">Cleanly Designed, Conversion-focused, and build for easy updates.</p>
                            </div>
                        </div>
                    </div>
                    {/* UI-UX design card */}
                    <div id="card" className="md:col-span-6 col-span-12 row-span-3">
                        <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                            <div className="flex flex-col h-full justify-center gap-2">
                                <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">Fullstack Developer</h1>
                                <p className="md:text-2xl max-w-96 animated-text">Developing complete applications from front-end to back-end with clean, efficient code, focusing on performance, scalability, and usability.</p>
                            </div>
                        </div>
                    </div>

                    {/* Moti card */}
                    <div id="card" className="md:col-span-4 col-span-12 row-span-4">
                        <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                            <div className="flex flex-col justify-between h-full">
                                {
                                    [
                                        "BE YOURSELF",
                                        "BE DIFFERENT",
                                        "BUILD DIFFERENT"
                                    ].map(
                                        (text, index) => (
                                            <h1 className='gradient-title md:text-5xl text-3xl font-bold animated-text' key={index}>{text}</h1>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    {/* bento social link */}
                    {
                    bentoSocialLinks.map((item, index) => (
                        <div id="card" className="md:col-span-4 col-span-12 row-span-2" key={index}>
                        <a 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block w-full h-full"
                        >
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                            <div className="flex justify-between items-center h-full">
                                <div className="flex items-center md:gap-5">
                                <img src={item.icon} alt={item.name} className="" />
                                <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium animated-text">{item.name}</h1>
                                </div>
                                <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                                <img src="/images/arrowupright.svg" alt="arrowupright" className="lg:scale-100 scale-50" />
                                </div>
                            </div>
                            </div>
                        </a>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default About