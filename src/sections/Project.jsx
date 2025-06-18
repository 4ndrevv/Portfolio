import Carousel from '../components/Carousel';
import GradientSpheres from '../components/GradientSpheres';
import TitleHeader from '../components/TitleHeader';

import React from 'react'

export const Project = () => {
  return (
    <section id="projects" className='w-full h-full flex-center relative'>
        <GradientSpheres 
            sphere1Class={"projects-gradient-sphere projects-sphere-1"}
            sphere2Class={"projects-gradient-sphere projects-sphere-2"}
        />

        <div className="w-full md:my-40 my-20 relative z-10">
            <div className="container mx-auto md:p-0 px-5">
            <TitleHeader 
                title="PROJECTS"
                number="04"
                text="My Go-To Tools for Crafting Solutions"
            />
            </div>
            <div className="md:mt-20 mt-10">
                <Carousel />
            </div>
        </div>
    </section>
  )
}
