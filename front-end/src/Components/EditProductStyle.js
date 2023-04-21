import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    height: 100vh;
    align-items: flex-start;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #F3F1F1;

.formAddProduct, h1{
    margin-top: 2%;
    min-width: 100%;
    text-align: left;
    margin-left: 2%;
}
.inputAddProduct {
   width: 45%;
    padding: 5px 10px;
    margin: 8px 0px;
    box-sizing: border-box;
}
.labelAddProduct{
    width: 18%;
    padding: 12px 12px 12px 0px;
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

  .productItem{
    display: inline-grid;
  }

  .productFeedPage{
    display: grid;
  }

  #outProductCard{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  #leftProductCard{
  width: 60%;
  }

  #rightProductCard{
    
  }

  .ImgItem{
    width: 195px;
  }
`;