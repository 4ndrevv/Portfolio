import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView } from "framer-motion";
import { slides_2 } from '../../constants';

import { useTranslation } from "react-i18next";


const imgVariants = {
  initial: { x: -500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const textVariants = {
  initial: { x: 500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.05 },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const { t } = useTranslation();

  const translatedTitle = t(`project_content.${item.key}.title`);
  const translatedDesc = t(`project_content.${item.key}.desc`);

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt={translatedTitle} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{translatedTitle}</motion.h1>
        <motion.p variants={textVariants}>{translatedDesc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all flex-center text-white">{t('button_project_view')}</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Carousel_2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, slides_2.length - 1));
  };

  const xTranslate = -currentIndex * windowWidth;

  return (
    <div className="portfolio" >
      <motion.div
        className="pList"
        animate={{ x: xTranslate }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {slides_2.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>

      {/* Custom Navigation Buttons */}
      <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5 absolute bottom-5 right-0 z-10">
        <div
          onClick={handlePrev}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex items-center justify-center"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5" />
        </div>
        <div
          onClick={handleNext}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex items-center justify-center"
        >
          <img src="/images/CaretRight.svg" alt="right" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Carousel_2;
