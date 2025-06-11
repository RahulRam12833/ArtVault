import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border: 1px solid black;
    top: 70px;
    right: 40px;
    z-index: 5;
`
export const CartItems = styled.div`
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow:auto;
`

export const EmptyMessage = styled.span`
        font-size: 18px;
        margin: 50px auto;
` 

