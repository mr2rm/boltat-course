import React, { lazy, Suspense } from 'react';
import { UserSelfCard } from '../UserCard';

const UserList = ({ users }) => {
  return users.map(user => (
    <UserSelfCard key={user.id} hoverable={true} userId={user.id} />
  ));
};

export default UserList;
