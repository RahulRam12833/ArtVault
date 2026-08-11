import {HeroContainer,HeroContent,Eyebrow,HeroTitle,HeroDescription,HeroButton,HeroArtwork, BrushCircle} from "../hero/hero.styles"
import circle from "../../assets/circle.png"
import arthero from "../../assets/arthero.jpeg"
import {motion} from "motion/react"

const Hero = () => {
  return (
    <HeroContainer>
        <BrushCircle
  src={circle}
  alt=""
  
  initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
  animate={{
    opacity: 1,
    scale: 1,
    rotate: 0,
  }}
  transition={{
    duration: 0.8,
    ease: 'easeOut',
  }}
/>
        <HeroContent>
            <Eyebrow>CONTEMPORARY ART</Eyebrow>


            <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        >
        <HeroTitle>
                        Art Without
                        <br/>
                        boundaries.
                    </HeroTitle>
        </motion.h1>

            

            <HeroDescription>
                Paintings, drawings, digital art, photography and sculpture. Discover art beyond the canvas.
            </HeroDescription>

            <HeroButton to="/shop">
            Explore Art
            </HeroButton>
        </HeroContent>

        <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}>
            <HeroArtwork>
            <img src={arthero} art="Artwork"/>
        </HeroArtwork>
        </motion.div>
    </HeroContainer>
  )
}

export default Hero