import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 100px;
    margin-bottom: 15px;


`
   
export const ImageContainer = styled.div`
    width: 60%;
    height: 130px;
    padding-right: 15px;

    img {
      width: 100%;
      height: 70%;
    }
`

export const ItemDetails = styled.div`
        width: 60%;
        display: flex;
        flex-direction: column;
        

        span {
            font-size: 14px;
            margin-left: 4px;
            color: black;
        }
`