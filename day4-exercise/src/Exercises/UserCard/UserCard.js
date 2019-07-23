import React from "react";
import families from "../../data.json";
import UserSelfCard from "./UserSelfCard";
import styles from "./UserCard.module.scss";

const UserCard = ({ user }) => {
	return (
		<div className={styles.container}>
			<UserSelfCard user={user} />
			<div className={styles.card}>
				<p className={styles.title}>Married to</p>
				{user.marriedTo.map(id => (
					<a href={`#${id}`} key={id} className={styles.link}>
						{id}
					</a>
				))}
			</div>
			<div className={styles.card}>
				<p className={styles.title}>Children</p>
				{user.children.map(id => (
					<a href={`#${id}`} key={id} className={styles.link}>
						{id}
					</a>
				))}
			</div>
		</div>
	);
};

export default UserCard;
