import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column; 
   
    table {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 80%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    
    th {
        /* border-bottom: 1px solid black; */
        background-color: rgb(20, 215, 179);
        color: white;
        padding: 12px 15px;
        text-align: left;
    }
    tr:hover {
        background-color: rgb(20, 215, 179);
        color: white;
        border-bottom: 1px solid #dddddd;
    }
    td {
        background-color: white;
        color: black;
        text-align: left;
        padding: 12px 15px;
    }

    button {
    
        background: #14d7b3;
        color: black;
        margin-top: 2%;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
    }
    /* .btnLogin{
        background: #14d7b3;
    } */
    #btnDelete{
        background: rgb(234 110 110);
    }
`;