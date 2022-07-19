import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import NavbarM from './NavbarM';
import s from './styleMarket.module.css';

const Market = () => {
  return (
    <div style={{ backgroundColor: 'black', height: 1000 }}>
      <div className='row'>
        <div className='col-lg-12'>
          <Navbar />
        </div>
      </div>
      <div className='row' style={{ marginTop: 56, height: 100, backgroundColor: '#1e1e1e' }}>
        <NavbarM />
        <hr style={{ color: '#595959', height: 3 }} />
      </div>
      <div className='row' style={{ height: 60, backgroundColor: '#1e1e1e' }}>
        <div className='col-lg-9 d-flex' style={{ width: 400, marginLeft: 30, marginBottom: 20 }}>
          <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" style={{ borderColor: 'rgb(8, 255, 243)', color: 'rgb(8, 255, 243)', backgroundColor: '#1e1e1e' }} />
          <button class="btn btn-outline-info" type="submit">Поиск</button>
        </div>
      </div>
      <div className='row' style={{ height: 760, backgroundColor: '#1e1e1e' }}>
        <div className='col-lg-9'>

        </div>
        <div className='col-lg-3'>
        <div class="shadow rounded">
          <div class="card border-info mb-3" style={{ height: 750, backgroundColor: '#323232', width: 440, color: 'white'}}>
              <div class="text-center"><h2>Фильтры</h2></div>
              <hr style={{ color: 'rgb(0, 247, 255)', height: 2 }} />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Market;