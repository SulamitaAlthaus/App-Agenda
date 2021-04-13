import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding-bottom: 55px;
`

export const Form = styled.div`
width: 600px;
margin-top: 15px;
`
export const TypeIcons = styled.div`
width: 100%;
dysplay: flex;
justify-content: center;

.inative{
 opacity: 0.5;
 &:hover{
  opacity: 0.9;
 }
}

button{
 border: none;
 background: none;
 margin: 0px;
}
button:focus{
 outline-style: none;
}

img{
 width: 50px;
 height: 50px;
 cursor: pointer;
 &:hover{
  opacity: 0.5;
 } 
}
`
export const Input = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;

span{
 color: #707070;
 margin: 5px 0px;
}
input{
 font-size: 16px;
 padding: 15px;
 border: none;
 border-bottom: 1px solid #FFC400;

}
img{
 width: 15px;
 height: 15px;
}
`

export const TextArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 10px 0;


span{
 color: #707070;
 margin: 10px 0px;
}

textarea{
 font-size: 16px;
 border: 1px solid #FFC400;
 border-radius: 10px;
 padding: 10px;
}
`
export const Options = styled.div`
display: flex;
justify-content: space-between;

button{
font-weigth: bold;
color: #FFC400;
border: none;
background: none;
cursor: pointer;
font-size:18px;
&:hover{
color: #000000;
opacity: 0.8;
}
}
button:focus{
outline-style: none;
}
div{
 display: flex;
 align-items: center;
 color: #FFC400;
 font-weigth: bold;
}
`
export const Save = styled.div`
width: 100%;

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
 &:hover{
  color: #000000;
  opacity: 0.8;
 }
}
button:focus{
outline-style: none;
}
`