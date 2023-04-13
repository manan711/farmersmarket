import styled from 'styled-components';

export const Container = styled.div`

.menuList {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background-color: rgb(20, 215, 179);
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: space-between;
    height: 50px;
  }
  
  #menuItemLogout{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  #menuItemLogin{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  
  .menuItem a, li {
    display: block;
    color: black;
    text-align: center;
    padding: 8px 13px;
    text-decoration: none;
    font-weight: bold;
    padding: 0;
    padding: 8px 13px;
  }

  .menuItem a:hover {
    background-color: white;
    color: black;
    font-weight: bold;
    padding: 16px 13px;
  }

  #Img-Line{
    width: 57%;
    padding-top: 193%;

  }
`;