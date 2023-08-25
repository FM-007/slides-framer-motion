import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./style.css";

import Image1 from "../assets/charuto-de-repolho-vegetariano-2.jpeg";
import Image2 from "../assets/img-desk.jpg";
import Image3 from "../assets/logo.jpg";
import Image4 from "../assets/spider.jpg";

const images = [Image1, Image2, Image3, Image4];

export const Slides = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className="App">
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div 
                    className="inner" 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width}}
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {images.map(image => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="Texto Padrão" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}