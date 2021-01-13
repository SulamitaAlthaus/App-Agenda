import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`

export const Content = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 15px;
h1{
 color: #FFC400;
}
p{
 color: #B3B3B3;

}
`

export const QrCodeArea = styled.div`
width: 100%;
display: flex;
justify-content: center;

`
export const ValidationCode = styled.div`
display: flex;
flex-direction: column;
span{
 text-transform: uppercase;
 font-weigh: bold;
}
input{
 font-size: 18px;
 padding: 10px;
 text-align: center;
}
button{
 color: #FFFFFF;
 font-weigth: bold;
 font-size: 18px;
 width: 100%;
 background: #FFC400;
 border: none;
 margin-top: 10px;
 padding: 10px;
 border-radius: 10px;
 cursor: pointer;
 margin-bottom: 55px;
 &:hover{
  color: #000000;
  opacity: 0.8;
 }
}
`