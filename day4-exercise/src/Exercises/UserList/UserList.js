import React from 'react';
import { UserSelfCard } from '../UserCard';

const UserList = ({ users }) => {
  return users.map(user => <UserSelfCard user={user} hoverable={true} />);
};

export default UserList;
