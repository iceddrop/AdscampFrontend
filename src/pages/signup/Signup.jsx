import React from 'react'
import "../Login/Login.css";
import CompanyLogo from "../../assets/img/adscamplogo.png";
import { AiOutlineMail } from "react-icons/ai"
import { TfiLock } from 'react-icons/tfi'
import AuthContext from '../../context/AuthProvider'
import {BsPerson} from "react-icons/bs"

export default function Login() {
  const LOGIN_URL = 'https://adscamp.thevootblog.com/api/v1/users/login';
  const { auth, setAuth } = React.useContext(AuthContext);
  const userRef = React.useRef();
  const errRef = React.useRef();

  const [loginInput, setLoginInput] = React.useState({
    email: '',
    username:'',
    password: ''
  })
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState(false)


  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setLoginInput(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  console.log(loginInput)

  return (
    <>
      {success ?
        (
          <p>Sucessfully logged in <a href='#'>Go home</a></p>
        )
        :
        (
          <div className="login-bg">
            <div className="login-box">
              <div className="login-text-div">
                <img src={CompanyLogo} className="company-logo" alt="company logo" />
                <h2 className="login-title mt-1">Adscamp</h2>
                <p className="login-paragraph mt-1">Login and start using!</p>
                <p ref={errRef} className={error ? 'show-error' : 'hide-error'} aria-live='assertive'>{error}</p>
                <form className='login-form d-flex flex-column'>
                  @csrf
                  <label htmlFor='emailInput' className='form-label'>Email address</label>
                  <div className="form-input-div mb-3">
                    <AiOutlineMail className="mail-icon me-3" />
                    <input name='email' id='emailInput' type='text' className="form-input" placeholder='JaneDoe@gmail.com' value={loginInput.email} onChange={handleChange} />
                  </div>
                  <label htmlFor='usernameInput' className='form-label'>Username</label>
                  <div className="form-input-div mb-3">
                    <BsPerson className="mail-icon me-3" />
                    <input name='username' id='usernameInput' type='text' className="form-input" placeholder='JaneDoe' value={loginInput.username} onChange={handleChange} />
                  </div>
                  <label htmlFor='passwordInput' className='form-label'>Password</label>
                  <div className="form-input-div">
                    <TfiLock className="lock-icon me-3" />
                    <input name='password' id='passwordInput' type='password' className="form-input" placeholder='********' value={loginInput.password} onChange={handleChange} />
                  </div>
                  <div className="d-flex align-items-center mt-3 mb-4" id='inputReview'>
                    <input name='checkbox' id='checkboxInput' className="login-check" type='checkbox'/>
                    <label htmlFor='checkboxInput' className="check-label ms-2" for='checkbox'>Remember me for 30 days</label>
                  </div>
                  <button className="login-button mb-4" type='submit'>Signup to the platform</button>
                </form>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}