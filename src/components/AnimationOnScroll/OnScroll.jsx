import React from "react";
import { motion } from "framer-motion";
import "../../App.css";

export const blogList = [
  {
    image: "🍅",
    h2: "Fruit and vegetables",
    p: "They are reallly good for you....",
  },
  {
    image: "🍊",
    h2: "Fruit and vegetables",
    p: "They are reallly good for you....",
  },
  {
    image: "🍋",
    h2: "Fruit and vegetables",
    p: "They are reallly good for you....",
  },
  {
    image: "🍐",
    h2: "Fruit and vegetables",
    p: "They are reallly good for you....",
  },
  {
    image: "🍏",
    h2: "Fruit and vegetables",
    p: "They are reallly good for you....",
  },
  {
    image: "🍅",
    h2: "Fruit and vegetables",
    p: "They are reallly good for you....",
  },
  {
    image: "🍆",
    h2: "Fruit and vegetables",
    p: "They are reallly good for you....",
  },
  {
    image: "🍇",
    h2: "Fruit and vegetables",
    p: "They are reallly good for you....",
  },
];

const picAnimate = {
  offScreen: {
    x: -100,
  },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, -90, 180, 0],
    scale: [1, 1.2, 0.8, 1],
    transition: {
      duration: 2.5,
    },
  },
};

const textAnimate = {
  offScreen: {
    y: 100,
    opacity: 0,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    // rotate: [90, 180, 0],
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
    },
  },
};
const textAnimate2 = {
  offScreen: {
    y: 100,
    opacity: 0,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    // rotate: [90, 180, 0],
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
    },
  },
};

function Card({ image, h2, p, id }) {
  return (
    <motion.div
      className='card'
      id={id}
      initial={"offScreen"}
      // animate={"onScreen"}
      whileInView={"onScreen"}
      //amount refers to when to animate on screen viewport
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div className='image-container' variants={picAnimate}>
        {image}
      </motion.div>
      <motion.h2 variants={textAnimate}>{h2}</motion.h2>
      <motion.p variants={textAnimate2}>{p}</motion.p>
    </motion.div>
  );
}

function OnScroll() {
  return blogList.map((item, index) => (
    <div className='card-wrapper' key={index}>
      <Card image={item.image} h2={item.h2} p={item.p} />
    </div>
  ));
}

export default OnScroll;
