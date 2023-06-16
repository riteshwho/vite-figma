import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Login.css";
import login from '../Images/login.png';
import google from '../Images/google.svg';
import fb from '../Images/facebook.svg';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        style={{ background: "white", color: "black", border: "none" }}
        onClick={handleShow}
      >
        Create account. <span style={{ color: "blue" }}>It’s free!</span>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <span className="green">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </span>

        <h2>Sign in</h2>
        <div className="inputs">
          <input className="email" type="text" placeholder="Email" />
          <input className="pass" type="password" placeholder="Password" />
        </div>

        <div className="footer">
          <div>
            <button className="sign">Sign In</button>
            <div className="svg">
              <img className="fb" src={fb} />
              <a href="https://www.facebook.com/"> Sign in</a>
              <br />
              <img className="google" src={google} />
              <a href="https://myaccount.google.com/"> Sign in</a>
            </div>
          </div>
          <div>
            <img className="logo" src={login} />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Login;
