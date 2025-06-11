import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 100px;
    margin-bottom: 15px;

    img {
        width:100px;
        height:100px;
        object-fit: scale-down;
    }
`
   

export const ItemDetails = styled.div`
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
            font-size: 14px;
            margin-left: 4px;
            color: black;
        }
`