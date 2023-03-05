import "./Login.css";
import CompanyLogo from "../../assets/img/kisspng-react-javascript-library-github-5af70e3c5c73d5.5239164815261404763787.png";
import {AiOutlineMail} from "react-icons/ai"
import {TfiLock} from 'react-icons/tfi'
export default function Login() {
  return (
    <div className="login-bg">
      <div className="login-box">
        <div className="login-text-div">
          <img src={CompanyLogo} className="company-logo" alt="company logo" />
          <h2 className="login-title mt-1">Ignite Lab</h2>
          <p className="login-paragraph mb-4 mt-1">Login and start using!</p>
          <form className='login-form d-flex flex-column'>
             <label className='form-label'>Email address</label>
             <div className="form-input-div mb-3">
                <AiOutlineMail className="mail-icon me-3"/>
                <input type='text' className="form-input" placeholder='JaneDoe@gmail.com'></input>
             </div>
             <label className='form-label'>Password</label>
             <div className="form-input-div">
              <TfiLock className="lock-icon me-3"/>
              <input type='password' className="form-input" placeholder='********'></input>
             </div>
             <div className="d-flex align-items-center mt-3 mb-4" id='inputReview'>
                <input className="login-check" type='checkbox' id='checkbox'></input>
                 <label className="check-label ms-2" for='checkbox'>Remember me for 30 days</label>
             </div>
             <button className="login-button">Login to the platform</button>
          </form>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <a className="login-link" href='#'>Forgot your password?</a>
            <a className="login-link mt-2" href='#'>Don't have an account? Create one!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
