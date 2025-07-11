import GradientSpheres from '../components/GradientSpheres';
import TitleHeader from '../components/TitleHeader';
import Carousel from '../components/Carousel';

import { useTranslation } from 'react-i18next';

import React from 'react'

export const Certificate = () => {
    const { t } = useTranslation();
  return (
    <section id="projects" className='w-full h-full flex-center relative'>
        <GradientSpheres 
            sphere1Class={"projects-gradient-sphere projects-sphere-1"}
            sphere2Class={"projects-gradient-sphere projects-sphere-2"}
        />

        <div className="w-full md:my-40 my-20 relative z-10">
            <div className="container mx-auto md:p-0 px-5">
            <TitleHeader 
                title={t('certificate')}
                number="05"
                text={t('sub_certificate')}
            />
            </div>
            <div className="md:mt-20 mt-10">
                <Carousel />
            </div>
        </div>
    </section>
  )
}
