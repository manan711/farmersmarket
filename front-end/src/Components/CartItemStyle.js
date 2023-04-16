import styled from 'styled-components';

export const Container = styled.li`

display: flex;
flex-flow: row nowrap;
-webkit-box-pack: start;
justify-content: flex-start;
align-items: flex-start;
padding-top: 2%;

.blockItem{
    width: -webkit-fill-available;
    display: flex;
    place-content: center space-around;
    border-radius: 4px;
    -webkit-box-align: center;
    align-items: center;
    height: 80px;
    background: #ddd9d9;;
    -webkit-box-pack: start;

}

.ImgItem{
    width: 86px;
    height: 58px;
    object-fit: revert;
    border-radius: 13%;
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

#ItemName{
    width: 100%;
    padding-left: 8%;
}
#btnAdd{
    background: #58F4D8;
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 24%;
    height: 40px;
    color: black;
    font-weight: bold;
}

#btnRemove{
    background: rgb(234, 110, 110);
    border-radius: 4px;
    border: none;
    font-size: medium;
    width: 24%;
    height: 40px;
    color: black;
    font-weight: bold;
}

#groupButtonCart{
    display: flex;
    width: 40%;
    -webkit-box-pack: justify;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
}

#ItemPrice{
    padding-left: 2%;
}

#blockItemLeft{
    display: flex;
    align-items: center;
    flex-direction: row;
}
`;