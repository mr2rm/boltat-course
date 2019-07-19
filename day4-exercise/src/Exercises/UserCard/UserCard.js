import React from 'react';
import families from '../../data.json';
import styles from './UserCard.module.scss';
import UserSelfCard from './UserSelfCard';
import { getPersonById } from '../../utils.js';

const UserCard = ({ user }) => {
  return (
    <div className={styles.container}>
      <UserSelfCard user={user} />
      <div className={styles.card}>
        <p className={styles.title}>Married to</p>
        {user.marriedTo.map(pId => (
          <UserSelfCard
            hoverable={true}
            secondary={true}
            user={getPersonById(families, pId)}
          />
        ))}
      </div>
      <div className={styles.card}>
        <p className={styles.title}>Children</p>
        {user.children.map(pId => (
          <UserSelfCard
            hoverable={true}
            secondary={true}
            user={getPersonById(families, pId)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserCard;
