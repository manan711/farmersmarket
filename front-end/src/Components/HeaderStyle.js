import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    height: 7em;

    img{
        width: 15%;
    }
    #seacrhProducts{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    #informationUser{
        display: flex;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        flex-flow: row nowrap;
    }

    #seacrhProducts{
    width: 40%;

}

#inpSearch{
    width: 78%;
    height: 35px;
    font-size:medium;
    border-radius: 4px;
    border-style: groove;
    border-color: #14d7b3;
}

#Icon-Search{
    width: 20%;
}
#btnSearch{
    display: flex;
    background: #14d7b3;
    border-radius: 4px;
    border: none;
    color: white;
    align-items: center;
    justify-content: space-around;
    font-size: medium;
    width: 20%;
    height: 40px;
}
#informationUser{
    width: 10%;
   
}

#Icon-Profile{
    width: 25%;
}

#informationCart{
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 20%;
    align-items: center;
    align-content: space-around;
}

#Icon-Cart{
    padding-right: 3%;
}

#cartPrice{
    padding-right: 15%;
}

#btnCheckout{
    background-color: #0E60FF;
    color: white;
    height: 40px;
    width: 48%;
    border-style: none;
    border-radius: 4px;
    font-size: medium;
    font-weight: bold;
}
.btnItem{
    background: #14d7b3;
    color: black;
    margin-top: 2%;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
}

`;