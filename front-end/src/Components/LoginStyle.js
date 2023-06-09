import styled from "styled-components";

export const Container = styled.div`

display: flex;
height: 100vh;
align-items: center;
text-align: center;
flex-direction: column;
justify-content: center;
background-color: #F3F1F1;

.farmLogin{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}
.formLogin{
    margin-top: 2%;
    min-width: 100%;
}
.loginInput {
    width: 20%;
    padding: 5px 10px;
    margin: 8px 0;
    box-sizing: border-box;
}
label{
    width: 7%;
    padding: 12px 12px 12px 0;
    display: inline-flex;
}
.linkTo{
    background-color: #0E60FF;
    color: white;
    margin-top: 2%;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
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