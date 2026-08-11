import { FooterContainer,FooterBrand,FooterTagline,FooterCopyright } from "./footer.styles"

const Footer = () => {
  return (
    <FooterContainer>
        <FooterBrand>ArtVault</FooterBrand>

        <FooterTagline>Art without boundaries.</FooterTagline>

        <FooterCopyright>
            &copy; 2026 ArtVault
        </FooterCopyright>
    </FooterContainer>
  )
}

export default Footer