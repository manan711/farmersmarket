import styled from 'styled-components';

export const Container = styled.div`

background: aqua;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
#myCart{
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    background: aquamarine;
}
h1 {
    margin-top: 2%;
    min-width: 100%;
    text-align: center;
    margin-left: 2%;
}
.productList{
    width: 70%;
}
`;