import styled from 'styled-components';


export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:55%;
  margin:50px auto 0;
`
export const CheckoutHeader = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid grey;
    padding: 10px 0;
`

export const HeaderBlock = styled.div`
    text-transform: uppercase;
    font-weight: bold;    
  `

export const TotalAmount = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`