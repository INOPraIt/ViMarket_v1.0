import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../pages/store/slices/userSlice';
import logo from './img/1.png';
import logoTwo from './img/2.png';
import s from './style.module.css';
import Navbar from './components/Navbar/Navbar';
import logoThree from './img/3.gif';
import logoSvg from './img/4.png';
import imgMarket from './img/5.png';
import imgRulete from './img/6.png';
import imgNews from './img/7.png';
import ScheduleMonth from './components/Schedule/ScheduleHome/ScheduleMonth';
import ScheduleDay from './components/Schedule/ScheduleHome/ScheduleDay';
import ScheduleWeek from './components/Schedule/ScheduleHome/ScheduleWeek';
import ScheduleYear from './components/Schedule/ScheduleHome/ScheduleYear';
import Footer from './components/Footer/Footer';

const HomePage = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ backgroundColor: 'black', marginTop: 55 }}>
        <div className='row justify-content-center'>
          <div className='col-xl-4 rounded mx-auto d-block'>
            <img src={logo} alt="Logo" style={{ width: 600 }} className='rounded mx-auto d-block' />
          </div>
          <div className='col-xl-4 text-center'>
            <h1 className={s.postOne}>Добро пожаловать в ViMarket</h1>
            <button class="btn btn-outline-primary" style={{ width: 300, fontSize: 20, fontWeight: 'bold', marginTop: 50 }}>Купить ViCoin</button>
          </div>
          <div className='col-xl-4 rounded mx-auto d-block'>
            <div>
              <img src={logoTwo} className='rounded mx-auto d-block' alt="Logo" style={{ width: 600 }} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <img src={logoSvg} style={{ width: 900 }} />
            <h2 className={s.postOne}>С помощью ViCoin, торговать скинами легко выгодно и безопасно</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 gy-5'>
            <img src={logoThree} style={{ width: 400, marginTop: 100 }} className='rounded mx-auto d-block' />
          </div>
          <div className='col-xl-7 gy-5'>
            <h1 style={{ color: 'white', marginTop: 120, marginLeft: 178 }}>О нашей валюте</h1>
            <h4 style={{ maxWidth: 800, color: 'white', marginLeft: 180 }}>
              ViCoin - основная валюта на нашем сайте. Нельзя купить скины за рубли, здесь так не работает,
              хочешь быть крутым, купи ViCoin и торгуй им. ViCoin можно приобрести в нашем банке и у
              других пользователей. Если у тебя осталось пару лишних коинов просто продай их кому-нибудь , а
              деньги придут тебе на карту.
            </h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-6 gy-5'>
            <h1 style={{ color: 'white', marginTop: 120, marginLeft: 178 }}>Маркетплейс</h1>
            <h4 style={{ maxWidth: 900, color: 'white', marginLeft: 180 }}>
              Наша система маркетплейса уникальная и удобная, выбери игру или скин и купи её по уникально низкой цене. На нашей площадке есть все игры,
              которые есть в Steam и в Epic Games. Все транзакции проодят за ViCoin, покупайте его в нашем банке. На нашем маркетплейсе также можно продовать
              и сами Vi-коины. Лоты с ViCoin выставляют сами пользователи за свою цену, но у банка цена меняется в зависимости от средней стоимости, так что вам
              самим выбирать у кого покупать.
            </h4>
          </div>
          <div className='col-xl-6 gy-5'>
            <div className={s.hoverImageScale}>
              <img src={imgMarket} style={{ width: 900, marginTop: 10 }} className={s.hoverImageScale} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 gy-5 text-center'>
            <div>
              <img src={imgRulete} style={{ width: 600 }} className={s.smallRotate} />
            </div>
          </div>
          <div className='col-xl-7 gy-5'>
            <h1 style={{ color: 'white', marginLeft: 178, marginTop: 50 }}>Рулетка</h1>
            <h4 style={{ maxWidth: 800, color: 'white', marginLeft: 180 }}>
              Хочешь испытать удачу? У нас есть для тебя рулетка скинов. Рулетка может быть двойной или тройной,
              чем больше рулетка тем больше шанс выиграть, но и стоить такая рулетка будет дороже. Не упусти шанс, попробуй
              выиграть!
            </h4>
          </div>
        </div>
        <hr style={{ marginTop: 90 }} />
        <div className='col-sm-12 text-center'>
          <h1 className={s.postOne} >Новости</h1>
        </div>
        <div className='row'>
          <div className='col-xl-6 text-center'>
            <div className={s.hoverImageScale}>
              <img src={imgNews} style={{ width: 750, marginTop: 130 }} className={s.hoverImageScale} />
            </div>
          </div>
          <div className='col-xxl-6' style={{ maxWidth: 720, marginLeft: 150, color: 'white' }}>
            <h2 style={{ fontSize: 25, marginTop: 130 }}>Теперь на нашем сайте есть не только скины, но ещё игры и дополнения к ним, что само сабой является
              классным дополнением на нашем сайте. Самое главное то, что ты можешь не переплачивать покупая именно у нас.
              Покупка игр происходит так же с помощью ViCoin, преобретай их в банке. Читай новости на нашем сайте чтобы не пропустить что-то новое!
            </h2>
          </div>
        </div>
        <div className='row gy-5 center-block text-center'>
          <div style={{ maxWidth: 780, marginLeft: 570, marginTop: 140, color: 'white' }}>
            <h1>Статистика ViCoin</h1>
            <h3>
              ViCoin постоянно меняется и чтобы вам было удобнее совершать покупкт мы предостовляем вам подробную статистику.
              На этих графиках вы можете увидеть статистику ViCoin за сутки, неделю, месяц и год. Удачных сделок;)
            </h3>
          </div>
        </div>
        <div className='row gy-5' style={{ marginTop: 50 }}>
          <div className='col-lg-6 center-block gy-5'>
            <ScheduleMonth />
          </div>
          <div className='col-lg-6 center-block gy-5'>
            <ScheduleDay />
          </div>
          <div className='col-lg-6 center-block gy-5'>
            <ScheduleWeek />
          </div>
          <div className='col-lg-6 center-block gy-5'>
            <ScheduleYear />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}

export default HomePage
