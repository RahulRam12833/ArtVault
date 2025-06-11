import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height:450px;
  margin: 10px auto;
  position: relative;


  img{
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 50%;
    opacity: 0.7;
    position: absolute;
    top: 275px;
    left: 80px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`
export const Footer = styled.div`
  width: 85%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const Name = styled.span`
  width: 100%;
  margin-bottom: 15px;
`

export const Price = styled.span`
  width: 10%;
`

