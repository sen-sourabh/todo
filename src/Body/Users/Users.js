import React, { useState } from 'react'
import Alerts from './Alerts';
import AllUsers from './AllUsers';

export default function Users() {
	const [allusers, setAllUsers] = useState([
		{
			id: 1,
			name: "max",
			age: 12
		},
		{
			id: 2,
			name: "rony",
			age: 21
		},
	]);

	const deleteUser = (user) => {
		setAllUsers(allusers.filter((e) => {
			return e.id !== user.id
		}));
	}

	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(false);
	const onChangeNameHandler = (event) => {
		setName(event.target.value);
	};

	const onChangeAgeHandler = (event) => {
		setAge(event.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if(!name || !age) {
			let message1 = {
				msg: "All fields are required.",
				bgColor: "bg-danger",
				textColor: "text-white",
				opacity: 1
			};
			setMessage(message1);
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
			return false;
		}
		if(age === 0 || age < 0) {
			let message1 = {
				msg: "Invalid Age, Age should be valid.",
				bgColor: "bg-danger",
				textColor: "text-white",
				opacity: 1
			};
			setMessage(message1);
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
			return false;
		}
		let user = {
			id: Math.random(0, 999),
			name: name,
			age: age
		};
		setAllUsers([user, ...allusers]);
	}
	
	return (
		<div className="justify-center body-content">
			<form onSubmit={onSubmit}>
				<input className="form-control m-2" placeholder="Username" value={name} onChange={onChangeNameHandler}/>
				<input className="form-control m-2" type="number" placeholder="Age" value={age} onChange={onChangeAgeHandler} />
				<button type="submit" className="btn btn-outline-success btn-md m-2"><b> ADD USER </b></button>
			</form>
			<AllUsers allUsers={allusers} onDeleteUser={deleteUser} />
			{ error && <Alerts msg={message}/> }
		</div>
	)
}
