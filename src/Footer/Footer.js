import React from 'react'
import logo from '../logo.svg';
import {
  useNavigate
} from "react-router-dom";

function Footer(props) {
  let navigate = useNavigate();
  function handleLogout() {
    navigate("../", { replace: true });
    props.logout(false);
  }

  return (
    <div>
        <footer className="App-footer p-3">
          <div className="w-100">
            {props.isLoggedIn && <button className="btn btn-outline-danger btn-sm float-start" onClick={() => {handleLogout()}} >Log Out</button>}
            <span className="float-end"><img src={logo} className="App-logo footer-logo" alt="logo" /><strong> Todo </strong></span>
          </div>
        </footer>
    </div>
  )
}

export default Footer;