import React from 'react'

export default function AllUsers({allUsers, onDeleteUser}) {
	const capitalizeFirstLetter = (value) => {
		return value.charAt(0).toUpperCase() + value.slice(1);
	};

	const onClickHandlerForDelete = (userForDelete) => {
		onDeleteUser(userForDelete);
	};

	return (
		<div className="user-content">
			{	allUsers && allUsers.map((user) => {
					return (<li 
						className="user-details m-3 p-3"
						key={user.id}
						onClick={() => onClickHandlerForDelete(user)}
					>
						{ capitalizeFirstLetter(user.name) + ` (${user.age} age)` }
					</li>);
				}) 
			}
		</div>
	)
}
