import {HeroContainer,HeroContent,Eyebrow,HeroTitle,HeroDescription,HeroButton,HeroArtwork} from "../hero/hero.styles"

import arthero from "../../assets/arthero.jpeg"


const Hero = () => {
  return (
    <HeroContainer>
        <HeroContent>
            <Eyebrow>CONTEMPORARY ART</Eyebrow>

            <HeroTitle>
                Art Without
                <br/>
                boundaries.
            </HeroTitle>

            <HeroDescription>
                Paintings, drawings, digital art, photography and sculpture. Discover art beyond the canvas.
            </HeroDescription>

            <HeroButton to="/shop">
            Explore Art
            </HeroButton>
        </HeroContent>

        <HeroArtwork>
            <img src={arthero} art="Artwork"/>
        </HeroArtwork>
    </HeroContainer>
  )
}

export default Hero