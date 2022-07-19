import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { useAuth } from '../hooks/use-auth';
import { Navigate } from 'react-router-dom';
import s from './style.module.css';
import SheduleSpendingDay from './components/Schedule/ScheduleProfile/SheduleSpendingDay';
import SheduleSpendingMonth from './components/Schedule/ScheduleProfile/SheduleSpendingMonth';
import SheduleSpendingYear from './components/Schedule/ScheduleProfile/SheduleSpendingYear';
import ScheduleAttorney from './components/Schedule/ScheduleProfile/ScheduleAttorney';
import Footer from './components/Footer/Footer';

const ProfilePage = () => {
  const { isAuth, email } = useAuth()

  return isAuth ? (
    <div style={{ marginTop: 50, backgroundColor: 'black', color: 'white' }}>
      <div><Navbar /></div>
      <div className='row' >
        <div className='col-lg-3'>
          <div className={s.beautyRotate} style={{ marginTop: 20, marginLeft: 50 }}>
            <img src='https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg' className='rounded mx-auto d-block' style={{ width: 300 }} />
          </div>
        </div>
        <div className='col-lg-3' style={{ maxHeight: 340 }}>
          <h3 style={{marginTop: 70}}>День</h3>
          <SheduleSpendingDay />
        </div>
        <div className='col-lg-3' style={{ maxHeight: 340 }}>
          <h3 style={{marginTop: 70}}>Месяц</h3>
          <SheduleSpendingMonth />
        </div>
        <div className='col-lg-3' style={{ maxHeight: 340 }}>
          <h3 style={{marginTop: 70}}>Год</h3>
          <SheduleSpendingYear />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-1' style={{ marginLeft: 50}}>
          <button className='btn btn-outline-info' style={{ width: 300 }}>
            Сменить аватар
          </button>
        </div>
        <div className='col-lg-9' style={{ marginTop: 70 }}>
          <ScheduleAttorney />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12' style={{ marginLeft: 50 }}>
          <h3>{email}</h3>
          <h3>Баланс - </h3>
          <h3>Уровень активности - </h3>
          <h3>Уровень доверенности - </h3>
        </div>
      </div>
      <div className='row'>
        <h2 style={{ textAlign: 'center' }}>Последние покупки</h2>
        <div className='col-sm-3 text-center gy-4' >
          <img src='https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg' className='text-center' style={{ width: 300 }} />
        </div>
        <div className='col-sm-3 text-center gy-4' >
          <img src='https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg' className='text-center' style={{ width: 300 }} />
        </div>
        <div className='col-sm-3 text-center gy-4' >
          <img src='https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg' className='text-center' style={{ width: 300 }} />
        </div>
        <div className='col-sm-3 text-center gy-4' >
          <img src='https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg' className='text-center' style={{ width: 300 }} />
        </div>
      </div>
    <div>
      <Footer />
    </div>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}

export default ProfilePage;
