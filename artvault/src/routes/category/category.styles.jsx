import styled from 'styled-components';
export const CategoryContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 20px;
    row-gap: 50px;
`

export const CategoryTitle = styled.h2`font-size: 38px;
        margin-bottom: 25px;
        text-align: center;
        cursor: pointer;
        color: rgb(0, 0, 0);
`
