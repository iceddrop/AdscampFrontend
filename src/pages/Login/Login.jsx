import "./Login.css";
import CompanyLogo from "../../assets/img/kisspng-react-javascript-library-github-5af70e3c5c73d5.5239164815261404763787.png";
export default function Login() {
  return (
    <div className="login-bg">
      <div className="login-box">
        <div className="login-text-div">
          <img src={CompanyLogo} className="company-logo" alt="company logo" />
          <h2 className="login-title mt-1">Ignite Lab</h2>
          <p className="login-paragraph">Login and start using!</p>
        </div>
      </div>
    </div>
  );
}
