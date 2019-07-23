import React from "react";
import classnames from "classnames";
import styles from "./UserSelfCard.module.scss";

const UserSelfCard = ({ user, secondary = false }) => {
	return (
		<div className={styles.container}>
			<div
				className={classnames(styles.card, styles.selfCard, {
					[styles.secondary]: secondary
				})}
			>
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
		</div>
	);
};
export default UserSelfCard;
