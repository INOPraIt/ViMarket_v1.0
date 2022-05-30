import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../style.module.css';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light fixed-top justify-content-center" style={{ backgroundColor: 'rgb(2, 2, 2)' }}>
        <div class="container-fluid justify-content-center">
          <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{ color: 'white' }}>
            <span class="navbar-toggler-icon bg-dark" style={{ backroundColor: 'white', color: 'white' }}></span>
          </button>
          <div class="offcanvas offcanvas-end bg-black" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ backgroundColor: 'rgb(2, 2, 2)' }}>
            <div class="offcanvas-header">
              <h3 class="offcanvas-title light" id="offcanvasNavbarLabel" style={{ color: 'white', fontSize: 40 }}>Меню</h3>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: 'white' }}></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" style={{ fontSize: 20, color: 'white' }}>
                <li><NavLink class="nav-link active" to="/profile" className={s.link}>Ваш профиль</NavLink></li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/" className={s.link}>Главная</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/market" className={s.link}>Маркетплейс</NavLink>
                </li>
                <li><NavLink class="nav-link active" to="/profile" className={s.link}>Рулетка</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;