import React from "react";
import styles from "./UserCard.module.scss";
import UserSelfCard from "./UserSelfCard";
import { useUsers } from "../App/App.js";

const UserCard = ({ userId }) => {
	const { getPersonById, updateUser } = useUsers();
	const user = getPersonById(userId);
	const fetchUser = userId => {
		return fetch(`http://localhost:3001/persons/${userId}`)
			.then(res => res.json())
			.then(res => res.data);
	};
	React.useEffect(() => {
		if (!user) {
			fetchUser(userId).then(user => updateUser(user));
		}
	}, [user]);
	if (!user) return null;
	return (
		<div className={styles.container}>
			<UserSelfCard userId={user.id} />
			<div className={styles.card}>
				<p className={styles.title}>Married to</p>
				{user.marriedTo.map(pId => {
					return (
						<UserSelfCard
							hoverable={true}
							secondary={true}
							userId={pId}
						/>
					);
				})}
			</div>
			<div className={styles.card}>
				<p className={styles.title}>Children</p>
				{user.children.map(pId => {
					return (
						<UserSelfCard
							hoverable={true}
							secondary={true}
							userId={pId}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default UserCard;
