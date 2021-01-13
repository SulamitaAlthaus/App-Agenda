import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';
import Qr from 'qrcode.react';


//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
 const [mac, setMac] = useState();
 const [filterActived, setFilterActived] = useState();
 const [lateCount, setLateCount] = useState();
 const [redirect, setRedirect] = useState(false);

 async function SaveMac() {
  if (!mac)
   alert('Você precisa informar o número que aparece no celular!');
  else
   await localStorage.setItem('@web/macaddress', mac);
   setRedirect(true);
   window.location.reload();


 }



 async function lateVerify() {
  await api.get(`/task/filter/late/11:11:11:11:11:11`)
   .then(response => {
    setLateCount(response.data.length)
   })
 }
 function Notification() {
  setFilterActived('late');
 }

 useEffect(() => {
  lateVerify();

 }, [filterActived,])
 return (
  <S.Container>
   {redirect && <Redirect to="/" />}
   <Header lateCount={lateCount} clickNotification={Notification} />
   <S.Content>
    <h1>CAPTURE O QRCODE PELO APP</h1>
    <p>suas atividades serão sincronizadas com o celular</p>
    <S.QrCodeArea>
     <Qr value="http://192.168.0.5:19002" size={250} />
    </S.QrCodeArea>
    <S.ValidationCode>
     <span>Digite a numeração que apareceu no celular</span>
     <input type="text" onChange={e => setMac(e.target.value)} value={mac} />
     <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
    </S.ValidationCode>
   </S.Content>
   <Footer />
  </S.Container>

 )
}

export default QrCode;
