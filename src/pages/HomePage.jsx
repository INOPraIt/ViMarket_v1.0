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
import ScheduleMonth from './components/Schedule/ScheduleMonth';
import ScheduleDay from './components/Schedule/ScheduleDay';
import ScheduleWeek from './components/Schedule/ScheduleWeek';
import ScheduleYear from './components/Schedule/ScheduleYear';

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
            <img src={logoTwo} className='rounded mx-auto d-block' alt="Logo" style={{ width: 600 }} />
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
            <img src={imgMarket} style={{ width: 900, marginTop: 10 }} className='rounded mx-auto d-block' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 gy-5'>
            <img src={imgRulete} style={{ width: 600 }} className='rounded mx-auto d-block' />
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
          <div className='col-xl-6'>
            <img src={imgNews} style={{ width: 750, marginTop: 130 }} class="rounded mx-auto d-block" />
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
          <footer class="bd-footer py-4 py-md-5 mt-5 bg-black">
            <div class="container py-4 py-md-5 px-4 px-md-3">
              <div class="row">
                <div class="col-lg-3 mb-3">
                  <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none footer-brand" href="/" aria-label="Bootstrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                    <span class="fs-5">ViMarket</span>
                  </a>
                  <ul class="list-unstyled small text-muted">
                    <li class="mb-2">Разработано и создано для всех игроков CS_GO <a href="/docs/5.1/about/team/">командой ViMarket</a> с помощью <a href="https://github.com/twbs/bootstrap/graphs/contributors" rel="nofollow noopener" target="_blank">наших дизайнеров и программистов</a>.</li>
                    <li class="mb-2">Платформа запатентована в соответствии со <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">всеми законами РФ </a></li>
                    <li class="mb-2">Присылайте свои предложения по сайту и переводу на info@bootstrap-4.ru</li>
                    <li class="mb-2">Актуальная версия v5.1.3.</li>
                  </ul>
                </div>
                <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                  <h5>Ссылки</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2"><a href="/">Главная</a></li>
                    <li class="mb-2"><a href="/docs/5.1/">Документация</a></li>
                    <li class="mb-2"><a href="/docs/5.1/examples/">Примеры</a></li>
                    <li class="mb-2"><a href="https://opencollective.com/bootstrap" rel="nofollow noopener" target="_blank">Темы</a></li>
                    <li class="mb-2"><a href="https://blog.getbootstrap.com/" rel="nofollow noopener" target="_blank">Блог</a></li>
                  </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                  <h5>Руководство</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2"><a href="/docs/5.1/getting-started/">Начало работы</a></li>
                    <li class="mb-2"><a href="/docs/5.1/examples/starter-template/">Стартовый шаблон</a></li>
                    <li class="mb-2"><a href="/docs/5.1/getting-started/webpack/">Webpack</a></li>
                    <li class="mb-2"><a href="/docs/5.1/getting-started/parcel/">Parcel</a></li>
                  </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                  <h5>Проекты</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap" rel="nofollow noopener" target="_blank">Bootstrap 5</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" rel="nofollow noopener" target="_blank">Bootstrap 4</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/icons" rel="nofollow noopener" target="_blank">Иконки</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/rfs" rel="nofollow noopener" target="_blank">RFS</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter" rel="nofollow noopener" target="_blank">npm starter</a></li>
                  </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                  <h5>Сообщество</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues" rel="nofollow noopener" target="_blank">Issues</a></li>
                    <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" rel="nofollow noopener" target="_blank">Discussions</a></li>
                    <li class="mb-2"><a href="https://github.com/sponsors/twbs" rel="nofollow noopener" target="_blank">Corporate sponsors</a></li>
                    <li class="mb-2"><a href="https://opencollective.com/bootstrap" rel="nofollow noopener" target="_blank">Open Collective</a></li>
                    <li class="mb-2"><a href="https://bootstrap-slack.herokuapp.com/" rel="nofollow noopener" target="_blank">Slack</a></li>
                    <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" rel="nofollow noopener" target="_blank">Stack Overflow</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}

export default HomePage
