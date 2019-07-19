import React, { useEffect, useState } from "react";
import App from "./App";
import UserList from "./UserList";
import families from "../../data.json";
import loadingImage from "../../assets/images/loading.svg";

export const Example1 = () => <UserList users={families} />;
export const Example2 = () => {
	const [families, setFamilies] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/persons")
			.then(resp => resp.json())
			.then(jsonResp => {
				setFamilies(jsonResp.data);
			});
	}, []);

	// todo: add style to loading
	return families.length ? (
		<UserList users={families} />
	) : (
		<img src={loadingImage} />
	);
};
export default UserList;
