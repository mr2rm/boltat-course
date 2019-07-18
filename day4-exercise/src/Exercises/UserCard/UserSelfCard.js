import React from "react";
import styles from "./UserSelfCard.module.scss";

const UserSelfCard = ({ user }) => {
	return (
		<div className={styles.card}>
			<img src={user.image} className={styles.image} />
			<div className={styles.identity}>
				<p className={styles.firstname}>{user.name}</p>
				<p className={styles.surname}>{user.surName}</p>
			</div>
			<div className={styles.detail}>
				<span>{user.gender}</span>
				<div className={styles.point} />
				<span>{user.age}</span>
			</div>
		</div>
	);
};
export default UserSelfCard;
