import styled from "styled-components";

export const Container = styled.div`

display: flex;
-webkit-box-align: center;
align-items: center;
text-align: center;
flex-direction: column;
-webkit-box-pack: center;
background-color: rgb(243, 241, 241);
justify-content: center;
padding-top: 5%;

.farmLogin{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}
.createAccountForm{
    margin-top: 2%;
    min-width: 100%;
}
.loginInput {
    width: 20%;
    padding: 5px 10px;
    margin: 8px 0;
    box-sizing: border-box;
}
.labelCreateAccount{
    width: 17%;
    padding: 12px 0px 12px 0px;
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

  .radioTypeOfAccount{
        color: #303030;
        font-size: 14px;
        font-weight: 400;
        margin-right: 7px;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
  }

  .radioInput{
    margin-right: 1%;
  }

  .createAccountForm{
    display: block;
  }

  .inputCreateAccount{
    width: 20%;
    padding: 5px 10px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  #radioGroup{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
  }

  .labelRadioCreateAccount{
    padding-left: 130px;
  }

`;