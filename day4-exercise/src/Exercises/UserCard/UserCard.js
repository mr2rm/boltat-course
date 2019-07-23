import React from "react";
import styles from "./UserCard.module.scss";
import UserSelfCard from "./UserSelfCard";
import { getPersonById } from "../../utils";

const UserCard = ({ user }) => {
	return (
		<div className={styles.container}>
			<UserSelfCard user={user} />
			<div className={styles.card}>
				<p className={styles.title}>Married to</p>
				{user.marriedTo.map(id => (
					<UserSelfCard
						key={id}
						user={getPersonById(id)}
						secondary={true}
					/>
				))}
			</div>
			<div className={styles.card}>
				<p className={styles.title}>Children</p>
				{user.children.map(id => (
					<UserSelfCard
						key={id}
						user={getPersonById(id)}
						secondary={true}
					/>
				))}
			</div>
		</div>
	);
};

export default UserCard;
