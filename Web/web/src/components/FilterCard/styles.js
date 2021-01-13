import styled from 'styled-components';

export const Container = styled.div`
width: 220px;
height: 50px;
background: ${props => props.actived ? '#FFC400' : '#000000'};
padding: 5px;
border-radius: 5px;
display: flex; 
cursor: pointer;
flex-direction: column;
justify-content: space-around;

img{
 width: 25px;
 height: 25px;
}

span{
 color: #FFF;
 font-weight:bold;
 align-self: flex-end;
 font-size: 18px;
}

&:hover{
 background: #FFC400;
}
`