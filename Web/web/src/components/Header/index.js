import React, { useState, useEffect } from 'react';
import * as S from './styles';
import logo from '../../assets/Logo.png';
import bell from '../../assets/Notificação.png';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';


function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
      .then(response => {
        setLateCount(response.data.length)
      })
  }
  useEffect(() => {
    lateVerify();

  })

  async function Logout() {
    localStorage.removeItem('@web/macaddress');
    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INICIO</Link>
        <span className="dividir" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="dividir" />
        {!isConnected ?
          <Link to="/QrCode">SINCRONIZAR CELULAR</Link>
          :
          <button type="button" onClick={Logout}>SAIR</button>
        }

        {
          lateCount &&
          <>
            <span className="dividir" />
            <button onClick={clickNotification}>
              <img src={bell} alt="Notificação" />
              <span>{lateCount}</span>
            </button>
          </>
        }
      </S.RightSide>

    </S.Container>
  )
}

export default Header;
