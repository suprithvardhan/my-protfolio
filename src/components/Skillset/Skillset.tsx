'use client'
import React, { useState } from "react";
import styles from "./Skillset.module.scss";
import Image from "next/image";
import previousDisabled from "../../../public/icons/previous-disabled.svg";
import previousEnabled from "../../../public/icons/previous-enabled.svg";
import nextDisabled from "../../../public/icons/next-disabled.svg";
import nextEnabled from "../../../public/icons/next-enabled.svg";
import { motion, AnimatePresence } from "framer-motion";
import html from "../../../public/icons/icon-html.svg";
import css from "../../../public/icons/icon-css.svg";
import js from "../../../public/icons/icon-js.svg";
import nextjs from "../../../public/icons/icon-nextjs.svg";
import reactjs from "../../../public/icons/icon-react.svg";
import solidity from "../../../public/icons/icon-solidity.svg";
import python from "../../../public/icons/icon-python.svg";
import java from "../../../public/icons/icon-java.svg";
import cplusplus from "../../../public/icons/icon-cplusplus.svg";
import androidstudio from "../../../public/icons/icon-androidstudio.svg";

const Skillset = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState("next");

    const handleNext = () => {
        setTransitionDirection("next");
        setActiveIndex((prevIndex) => (prevIndex === 9 ? prevIndex : prevIndex + 1));
    };

    const handlePrevious = () => {
        setTransitionDirection("previous");
        setActiveIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    };

    const texts = [
        { title: "HTML", description: "I know how to create the structure and content of web pages using HTML." },
        { title: "CSS", description: "I can style and format documents written in HTML using CSS." },
        { title: "JavaScript", description: "I can add interactivity and dynamic behavior to web pages using JavaScript." },
        { title: "React.js", description: "I am proficient in building user interfaces and creating reusable UI components with React.js." },
        { title: "Next.js", description: "I have experience in building server-side rendered React applications with built-in routing and other features using Next.js." },
        { title: "Android Studio", description: "I am skilled in developing Android applications using Java or Kotlin with Android Studio." },
        { title: "Solidity", description: "I have knowledge in writing smart contracts on the Ethereum blockchain using Solidity." },
        { title: "Python", description: "I am proficient in using Python for web development, data analysis, and more." },
        { title: "Java", description: "I have experience in developing mobile applications, web applications, and more using Java." },
        { title: "C++", description: "I am skilled in developing system software, game engines, and more using C++." }
    ];

    const textVariants = {
        hidden: { opacity: 0, x: transitionDirection === "next" ? 100 : -100, transition: { duration: 0.5, ease: "easeInOut" } },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
    };

    const textContainerVariant = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <div className="h-screen">
        <div className="ml-12 justify-center content-center">
            <div><h1 className="font-bold uppercase"> My Skillset</h1></div>
        </div>
        <div className={styles.skillsetContainer}>
            <div className={styles.contentContainer}>
                <AnimatePresence initial={false}>
                    <motion.div
                        key={activeIndex}
                        className={styles.textContainer}
                        variants={textContainerVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.h1 variants={textVariants}>{texts[activeIndex].title}</motion.h1>
                        <motion.p variants={textVariants}>{texts[activeIndex].description}</motion.p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className={styles.carouselContainer}>
                <div className={styles.carouselWrapper}>
                    <button
                        className={`${styles.previousContainer} ${activeIndex === 0 ? styles.disabled : ""}`}
                        onClick={handlePrevious}
                        title="Previous"
                    >
                        <Image src={activeIndex !== 0 ? previousEnabled : previousDisabled} alt="previous icon" className={styles.previous} />
                    </button>

                    <div className={styles.imagesContainer}>
                        {texts.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.container} ${activeIndex === index ? styles.active : ""}`}
                                animate={{ opacity: activeIndex === index ? 1 : 0, x: 0, scale: activeIndex === index ? 1 : 0.8 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <Image className={styles.image} alt={`image ${index}`} src={getImageSource(index)} />
                            </motion.div>
                        ))}
                    </div>

                    <button
                        className={`${styles.nextContainer} ${activeIndex === 9 ? styles.disabled : ""}`}
                        onClick={handleNext}
                        title="Next"
                    >
                        <Image src={activeIndex !== 9 ? nextEnabled : nextDisabled} alt="next icon" className={styles.next} />
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skillset;

function getImageSource(index) {
    switch (index) {
        case 0:
            return html;
        case 1:
            return css;
        case 2:
            return js;
        case 3:
            return reactjs;
        case 4:
            return nextjs;
        case 5:
            return androidstudio;
        case 6:
            return solidity;
        case 7:
            return python;
        case 8:
            return java;
        case 9:
            return cplusplus;
        default:
            return "";
    }
}
