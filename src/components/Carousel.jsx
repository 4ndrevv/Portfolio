import React, { useState } from 'react';
import { slides } from '../constants';
import { div } from "three/tsl";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(1);

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

  return (
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
                                            <p className="">{slide.title}</p>
                                        </div>
                                        <div className="flex-center gap-2">
                                            <p className="">Preview Project</p>
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
  );
};

export default Carousel;