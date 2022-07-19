import { useState } from 'react';
import Footer from '../pages/components/Footer/Footer';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className='container'>

      <div class="mb-3" style={{ width: 400, marginLeft: 450, marginTop: 200 }}>
        <label for="exampleInputEmail1" className="form-label" style={{ color: 'white' }}>Email address</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
      </div>
      <div className="mb-3" style={{ width: 400, marginLeft: 450 }}>
        <label for="exampleInputEmail1" className="form-label" style={{ color: 'white' }}>Password</label>
        <input
          className="form-control"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
      </div>

      <button
        onClick={() => handleClick(email, pass)}
        class="btn btn-outline-info"
        style={{ width: 400, marginLeft: 450 }}
      >
        {title}
      </button>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export { Form }