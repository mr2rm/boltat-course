import React from "react";
import styles from "./UserSelfCard.module.scss";

const UserSelfCard = ({ user }) => {
	console.log(user);
	return (
		<div className={styles.card}>
			<img src={user.image} className={styles.image} />
			<div className={styles.imageDescription}>
				<p>{user.name}</p>
				<p>{user.surName}</p>
			</div>
			<div className={styles.details}>
				<span>{user.gender}</span>
				<span className={styles.bullet} />
				<span>{user.age}</span>
			</div>
		</div>
	);
};
export default UserSelfCard;
