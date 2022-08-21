import React, { Fragment, useState } from 'react'
import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";
// import { useSelector } from 'react-redux';
import AuthContext from '../Store/auth-context';

function Header() {
  const logoText = {
    position: "absolute",
    top: "15px"
  };

  const[time, setTime] = useState("");
  const[UTCtime, setUTCTime] = useState("");
  // const money = useSelector(state => state.amount);
  
  setInterval(() => {
    setTime(getTime());
    setUTCTime(getUTCTime());
  },1000);

  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <div>
            <header className="App-header">
              <div className="row w-100">
                <div className="col-md-2 logo-side">
                  <Link to=""> 
                    <img src={logo} className="App-logo" alt="logo" />
                      <span style={logoText}>
                        <strong className="h1"> Todo </strong>
                      </span>
                  </Link>
                </div>
                { ctx.isLoggedIn && 
                  <Fragment>
                    <div className="col-md-8">
                      <ul className="menu-list">
                        <li>
                          <Link to=""> Home </Link>
                        </li>
                        <li>
                          <Link to="/about"> About </Link>
                        </li>
                        <li>
                          <Link to="/textop"> TextOp </Link>
                        </li>
                        <li>
                          <Link to="/users"> Users </Link>
                        </li>
                        <li>
                          <Link to="/trans"> Redux Transaction </Link>
                        </li>
                        <li>
                          <Link to="/calc"> Redux Calculator </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <div className="menu-list h5"><strong className="pe-3">IST:</strong> { time }</div>
                      <div className="menu-list h5 pt-4"><strong className="pe-2">UTC:</strong> { UTCtime }</div>
                    </div>
                  </Fragment>
                }
              </div>
            </header>
          </div>
        )
      }}
    </AuthContext.Consumer>
  )
}

function getTime() {
  let currentDateTime = new Date();
  let date = currentDateTime.getDate();
  let month = currentDateTime.getMonth() <= 9 ? "0"+currentDateTime.getMonth() : currentDateTime.getMonth();
  let fullyear = currentDateTime.getFullYear();
  let hours = currentDateTime.getHours() <= 9 ? "0"+currentDateTime.getHours() : currentDateTime.getHours();
  let minute = currentDateTime.getMinutes() < 9 ? "0"+currentDateTime.getMinutes() : currentDateTime.getMinutes();
  let second = currentDateTime.getSeconds() <= 9 ? "0"+currentDateTime.getSeconds() : currentDateTime.getSeconds();
  return date+"-"+month+"-"+fullyear+" "+hours+":"+minute+":"+second;
}

function getUTCTime() {
  let currentDateTime = new Date();
  let date = currentDateTime.getUTCDate();
  let month = currentDateTime.getUTCMonth() <= 9 ? "0"+currentDateTime.getUTCMonth() : currentDateTime.getUTCMonth();
  let fullyear = currentDateTime.getUTCFullYear();
  let hours = currentDateTime.getUTCHours() <= 9 ? "0"+currentDateTime.getUTCHours() : currentDateTime.getUTCHours();
  let minute = currentDateTime.getUTCMinutes() < 9 ? "0"+currentDateTime.getUTCMinutes() : currentDateTime.getUTCMinutes();
  let second = currentDateTime.getUTCSeconds() <= 9 ? "0"+currentDateTime.getUTCSeconds() : currentDateTime.getUTCSeconds();
  return date+"-"+month+"-"+fullyear+" "+hours+":"+minute+":"+second;
}

export default Header;