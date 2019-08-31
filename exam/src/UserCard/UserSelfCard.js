import React from 'react';
import classnames from 'classnames';
import styles from './UserSelfCard.module.scss';
import { Link } from 'react-router-dom';
import { useUsers } from '../App/App';

const UserSelfCard = ({ userId, hoverable, secondary = false }) => {
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
      <Link
        className={classnames(styles.card, styles.selfCard, {
          [styles.secondary]: secondary,
          [styles.hoverable]: hoverable
        })}
        to={`/user/${user.id}`}>
        <img className={styles.image} src={user.image} />
        <div className={styles.imageDescription}>
          <p>{user.name}</p>
          <p>{user.surName}</p>
        </div>
        <div className={styles.details}>
          <span>{user.gender}</span>
          <span className={styles.bullet} />
          <span>{user.age}</span>
        </div>
      </Link>
    </div>
  );
  return null;
};
export default UserSelfCard;
