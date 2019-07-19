import React from "react";
import { UserSelfCard } from "../UserCard";

const UserList = ({ users }) => {
	console.log(users);
	return (
		<>
			{users.map(user => (
				<UserSelfCard user={user} key={user.id} />
			))}
		</>
	);
};

export default UserList;
