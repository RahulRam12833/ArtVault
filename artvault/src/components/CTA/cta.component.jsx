import { motion } from "motion/react";
import {CTAContainer,CTATitle,CTADescription,CTAButton} from "./cta.styles"


const CTA = () => {
  return (
    <CTAContainer>
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.7 }}
    transition={{
      duration: 0.9,
      delay:0.3,
      ease: "easeInOut",
    }}
        >
        <CTATitle>
            Find Something<br/>
            worth keeping.
        </CTATitle>
      </motion.h1>
        <CTADescription>
            Discover paintings, drawings, digital arts, photography and sculptures.
        </CTADescription>

        <CTAButton to="/shop" whileHover="hover">
            Explore the collection
            
        </CTAButton>
    </CTAContainer>
  )
}

export default CTA