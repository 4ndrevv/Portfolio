import React, { useState } from 'react';
import { slides } from '../constants';
import { div } from "three/tsl";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Modal from './Modal';

import { useTranslation } from 'react-i18next';

const Carousel = () => {

    const { t } = useTranslation();

    const [currentSlide, setCurrentSlide] = useState(1);
    const [selectedSlide, setSelectedSlide] = useState(null);

    const modal = useRef();

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useGSAP( () => {
        gsap.to(".slider-item", {
            x: `-${currentSlide * 63}vw`,
            opacity: 1,
            duration: 1.2,
            ease: "expo.out",
        });
        gsap.fromTo(`.slider-item:nth-child(${currentSlide + 1}) img`,
            {scale: 2},
            {scale: 1, duration: 1, ease: "power2.out"}
        );
    }, [currentSlide] )

    function handleOpenModal(slideTitle) {
        setSelectedSlide(slideTitle.toLowerCase());
        modal.current.open();
    }

  return (
    <>
    <Modal ref={modal} buttonCaption={t('certificate_content_button')}>
        {selectedSlide && (
            <div className="flex flex-col items-center">
            <img
                src={t(`certificate_content.${selectedSlide}.modal.img`)}
                alt={t(`certificate_content.${selectedSlide}.title`)}
                className="w-full max-h-[40vh] object-contain rounded-md mb-4"
            />
            {/*
            <h2 className="text-2xl font-bold text-stone-800 mb-4 text-center">
                {t(`certificate_content.${selectedSlide}.modal.title`)}
            </h2>
            */}
            <div
                className="text-white text-justify space-y-3 max-h-[50vh] overflow-y-auto pr-2"
                dangerouslySetInnerHTML={{
                __html: t(`certificate_content.${selectedSlide}.modal.content`)
                }}
            />
            </div>
        )}
    </Modal>
    <div className='relative'>
        <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh] ">
            <div className="absolute w-full -left-[43vw] top-0">
                <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[60vh] items-center gap-[3vw] ml-[60%]">
                    {
                        slides.map((slide, index) => (
                            <div key={index} className="slider-item w-[60vw] h-full flex-none relative overflow-hidden">
                                <img src={slide.img} alt="slide" className="w-full h-full object-cover object-center" />

                                <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5">
                                    <div className="flex h-full justify-between items-center">
                                        <div className="flex-center gap-2">
                                            <p className="">{index+1}</p>
                                            <p className="">{t(`certificate_content.${slide.title.toLowerCase()}.title`)}</p>
                                        </div>
                                        <div 
                                        onClick={() => handleOpenModal(slide.title.toLowerCase())} 
                                        className="flex-center gap-2 cursor-pointer bg-blue-50 text-white px-2 py-1 rounded-md transition-colors duration-300 hover:bg-pink-100 select-none"
                                        >
                                        <p className="">{slide.mark}</p>
                                        <img className="md:size-10 size-7" src="/images/arrowupright.svg" alt="arrowup" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
            <div onClick={prevSlide} className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center">
                <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5" />
            </div>
            <div onClick={nextSlide} className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center">
                <img src="/images/CaretRight.svg" alt="right" className="w-5 h-5" />
            </div>
        </div>
    </div>
    </>
    
  );
};

export default Carousel;