import styled from "styled-components";

export const Container = styled.li`

background-color: rgb(243, 241, 241);
display: flex;
flex-flow: row nowrap;
-webkit-box-pack: start;
justify-content: flex-start;
align-items: flex-start;
padding-top: 5%;

.blockItem{
    width: 80%;
    display: flex;
    place-content: center;
    border-radius: 4px;
    -webkit-box-align: center;
    align-items: center;
    height: 329px;
    background: white;
    flex-flow: column nowrap;
    -webkit-box-pack: center;

    div{
        display: flex;
        width: 60%;
        align-items: center;
        justify-content: center;
    }
}
.ImgItem{
    width: 80px;
    height: 100%;
}

.btnItem{
    background: #58F4D8;
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 66%;
    height: 40px;
    color: black;
    font-weight: bold;
}

#btnAdd{
    background: #58F4D8;
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 40%;
    height: 40px;
    color: black;
    font-weight: bold;
}

#btnRemove{
    background: rgb(234 110 110);
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 40%;
    height: 40px;
    color: black;
    font-weight: bold;
}

#groupButtonCart{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

`;