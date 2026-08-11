import styled from 'styled-components';


export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:min(1000px,90%);
  margin:60px auto 0;
`
export const CheckoutHeader = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #d8d1c5;
    padding: 12px 0;

    color:#625d55;

    font-family:'DM Sans', sans-serif;
    font-size:0.75rem;
    font-weight:600;

    text-transform:uppercase;
    letter-spacing:0.08em;

`

export const HeaderBlock = styled.div`
   display:flex;
   align-items:center;  
  `

export const TotalAmount = styled.div`
    margin-top: 30px;
    margin-left: auto;

    font-family:'Playfair Display', serif;
    font-size: 2rem;
    font-weight:600;

    color:#292622;
`