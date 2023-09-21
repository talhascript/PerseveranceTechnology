import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import Partners from "@/components/Partners"

import { motion } from "framer-motion";

const animationVariants = {
  hidden: {
    opacity: 0,
    y: -100, // Start with a translation upward
    scale: 0.2, // Start with a smaller scale
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1, // Adjust the duration as needed
      type: "spring", // Use spring animation for a wild effect
      bounce: 0.5, // Adjust the bounce effect
    },
  },
};

export default function Home() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
      >
        <HeroSection />
      </motion.div>
      <hr />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
      >
        <Partners />
      </motion.div>
      <hr />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
      >
        <FeaturesSection />
      </motion.div>
    </>
  );
}
