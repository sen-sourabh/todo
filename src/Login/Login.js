import React, { useRef, useState } from 'react'
import Alerts from '../Body/Users/Alerts';

function Login(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [message, setMessage] = useState(null);
	const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const onSubmit = (event) => {
        event.preventDefault();
        if(!emailRef.current.value.trim()){
            let message1 = {
				msg: "Email should not be empty.",
				bgColor: "bg-danger",
				textColor: "text-white",
				opacity: 1
			};
			setMessage(message1);
			setErrorEmail(true);
			setTimeout(() => {
				setErrorEmail(false);
			}, 2000);
			return false;
        } else if(!emailRef.current.value.trim().includes('@')){
            let message1 = {
				msg: `Please include an '@' in the email address. '${emailRef.current.value}' is missing an '@'.`,
				bgColor: "bg-danger",
				textColor: "text-white",
				opacity: 1
			};
			setMessage(message1);
			setErrorEmail(true);
			setTimeout(() => {
				setErrorEmail(false);
			}, 2000);
			return false;
        } else if(emailRef.current.value.trim().endsWith('@')){
            let message1 = {
				msg: `Please enter a part following '@', '${emailRef.current.value}' is incomplete.`,
				bgColor: "bg-danger",
				textColor: "text-white",
				opacity: 1
			};
			setMessage(message1);
			setErrorEmail(true);
			setTimeout(() => {
				setErrorEmail(false);
			}, 2000);
			return false;
        }
        if(!passwordRef.current.value.trim()) {
            let message1 = {
				msg: "Password should not be empty or contain spaces.",
				bgColor: "bg-danger",
				textColor: "text-white",
				opacity: 1
			};
			setMessage(message1);
			setErrorPassword(true);
			setTimeout(() => {
				setErrorPassword(false);
			}, 2000);
			return false;
        } else if(passwordRef.current.value.trim().length < 6) {
            let message1 = {
				msg: "Password should be more than 6 character long.",
				bgColor: "bg-danger",
				textColor: "text-white",
				opacity: 1
			};
			setMessage(message1);
			setErrorPassword(true);
			setTimeout(() => {
				setErrorPassword(false);
			}, 2000);
			return false;
        }
        props.loggedInNow(emailRef.current.value.trim(), passwordRef.current.value.trim());
    };
  return (
    <div className="justify-center body-content">
        <div className="card p-3 w-50 shadow login-form">
            <form onSubmit={onSubmit}>
                <div className="text-start">
                    <label htmlFor="email" className="p-1"><strong>Email</strong></label>
                    <input className={`form-control m-1 ${errorEmail ? 'ask-email-cred' : ''}`} ref={emailRef} />
                </div>
                <div className="text-start">
                    <label htmlFor="email" className="p-1"><strong>Password</strong></label>
                    <input className={`form-control m-1 ${errorPassword ? 'ask-password-cred' : ''}`} type="password" ref={passwordRef} />
                </div>
                <div className="text-start">
                    <button type="submit" className="login-btn btn btn-outline-success btn-md my-2 px-5"> Login </button>
                </div>
            </form>
        </div>
        { (errorEmail || errorPassword) && <Alerts msg={message}/> }
    </div>
  )
}

export default Login;