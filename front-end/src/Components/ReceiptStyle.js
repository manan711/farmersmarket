import styled from 'styled-components';

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color: rgb(243, 241, 241);
#receipt{
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: flex-start;
    width: 41%;
    padding-left: 26px;
    border-radius: 4px;
}

.rowReceipt{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 94%;
}

.name{
    width: 33%;
}
.qty{
    width: 33%;
    text-align: center;
}
.itemPrice{
    width: 33%;
    text-align: right;
}

`;