import { Login } from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div style={{backgroundColor: 'black', height: 929}}>
      <div>
        <h2 style={{ textAlign: 'center', color: 'white' }}>Добро пожаловать. Войдите в аккаунт</h2>
      </div>
      <div>
        <Login />
      </div>
      <div>
      <p>
        <button className='btn btn-outline-danger' style={{width: 400, marginLeft: 762, marginTop: 17 }}><Link to="/register">Нет аккаунта зарегистрируйся</Link></button>
      </p>
          <h1></h1>    
      </div>
    </div>
  )
}

export default LoginPage;