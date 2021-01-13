import styled from 'styled-components';

export const Container = styled.div`
width: 250px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: -3px 1px 12px -2px rgba(0,0,0,0.51);
border-radius: 10px;
flex-direction: column;
margin: 20px;
cursor: pointer;
opacity: ${props => props.done ? 0.5 : 1};
transition: all 0.8s ease;


&:hover{
 opacity: 0.7;
}
`
export const TopCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
export const BottomCard = styled.div`
width: 100%;
display: flex;
justify-content: space-around;

strong{
 color: #707070;
}
` 

