import styled from 'styled-components';

export const Container = styled.div`

display: flex;
align-items: center;
text-align: center;
flex-direction: column;
justify-content: center;
background-color: #F3F1F1;
padding-top: 2%;

h1 {
    margin-top: 2%;
    min-width: 100%;
    text-align: center;
    margin-left: 2%;
}
.myAccountForm{
    margin-top: 2%;
    min-width: 100%;
}

.labelMyAccount{
    width: 11%;
    padding: 12px 12px 12px 0;
    display: inline-flex;
}

.inputMyAccount {
    width: 20%;
    padding: 5px 10px;
    margin: 8px 0;
    box-sizing: border-box;
}

button {
    background: #14d7b3;
    color: black;
    margin-top: 2%;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
  }
`;