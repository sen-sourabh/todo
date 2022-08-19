import './App.css';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {
  BrowserRouter
} from "react-router-dom";
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import Alerts from './Body/Users/Alerts';
import AuthContext from './Store/auth-context';
import store from './Store/store';
import { Provider } from 'react-redux';


function App() {
  let loggedIn;
  if(localStorage.getItem('isLoggedIn') === "true") {
    loggedIn = localStorage.getItem('isLoggedIn');
  }

  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
  const [message, setMessage] = useState(null);
	const [error, setError] = useState(false);
  

  const loggedInNow = (email, password) => {
    setIsLoggedIn(true);
    let message1 = {
      msg: "Login Successfully.",
      bgColor: "bg-success",
      textColor: "text-white",
      opacity: 1
    };
    setMessage(message1);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  }

  const logout = (value) => {
    setIsLoggedIn(value);
    let message1 = {
      msg: "Logout Successfully.",
      bgColor: "bg-success",
      textColor: "text-white",
      opacity: 1
    };
    setMessage(message1);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  }

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
    }}>
    <Provider store={store}>
      <BrowserRouter>
          <div className="App position-relative">
            <Header />
            {!isLoggedIn && <Login loggedInNow={loggedInNow} isLoggedIn={isLoggedIn} /> }
            {isLoggedIn && <Body /> }
            { error && <Alerts msg={message}/> }
            <Footer isLoggedIn={isLoggedIn} logout={logout} />
          </div>
      </BrowserRouter>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
