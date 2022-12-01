import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding:10px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight:700;
    flex:1;
    cursor:pointer;
    
    &:hover{
        opacity:0.6;
    }

    &:disabled{
        &:hover{
            opacity:1;
            cursor:no-drop;
        }
        background-color:gray;
    }
`
