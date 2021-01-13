import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 70px;
background: #000000;
border-bottom: 5px solid #FFC400;
display: flex;
`
//logo parte esquerda
export const LeftSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
padding-left: 40px;
img{
 width: 200px;
 height: 50px;
}
`
//logo parte direita
export const RightSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
justify-content: flex-end;
a{
    color: #FFF;
    font-weigth: bold;
    text-decoration: none;
    margin 0px 10px;
    &:hover{
    color: #FFC400;
    }
}
button{
    background:none;
    border: none;
    cursor: pointer;
    img{
        width: 30px;
        height: 35px;
    
    }
    span{
        background: #FFF;
        color: #FFC400;
        padding: 3px 7px;
        border-radius: 50%;
        position: relative;
        top: -20px; 
        right: 15px;
    }
    &:hover{
        opacity: 0.5;
    }
    
}
button:focus{
     outline-style: none;
}
.dividir::after{
    content: "|";   
    padding: 0 10px;
    color: #FFF;
}
button{
    font-size: 18px;
    color: #FFF;
}
`