import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './styleMarket.module.css';

const NavbarM = () => {
  return (
        <div className='col-lg-12 d-flex' style={{ marginLeft: 50 }}>
          <div style={{ marginLeft: 125, fontSize: 25, marginTop: 20}} className={s.linkEaseInOut}><p><NavLink to="profile" className={s.linkProfile}>Купить F2F</NavLink></p></div>
          <div style={{ marginLeft: 12, fontSize: 25, marginTop: 20}} className={s.linkEaseInOuts}><p><NavLink to="profile" className={s.linkProfiles}>Обменять инвентарь</NavLink></p></div>
          <div style={{ marginLeft: 12, fontSize: 25, marginTop: 20}} className={s.linkEaseInOuta}><p><NavLink to="profile" className={s.linkProfilea}>Продать ViCoin</NavLink></p></div>
          <div style={{ marginLeft: 12, fontSize: 25, marginTop: 20}} className={s.linkEaseInOutd}><p><NavLink to="profile" className={s.linkProfiled}>Продать ViCoin p2p</NavLink></p></div>
          <div style={{ marginLeft: 12, fontSize: 25, marginTop: 20}} className={s.linkEaseInOutg}><p><NavLink to="profile" className={s.linkProfileg}>Купить ViCoin</NavLink></p></div>
          <div style={{ marginLeft: 12, fontSize: 25, marginTop: 20}} className={s.linkEaseInOutс}><p><NavLink to="profile" className={s.linkProfileс}>Заказать оптом</NavLink></p></div>
          <div style={{ marginLeft: 12, fontSize: 25, marginTop: 20}} className={s.linkEaseInOutf}><p><NavLink to="profile" className={s.linkProfilef}>Купить игры</NavLink></p></div>
        </div>
  )
}

export default NavbarM;