import React from 'react';
import families from '../../data.json';
import UserCard from './UserCard';
import UserSelfCard from './UserSelfCard';

export default UserCard;
export { default as UserSelfCard } from './UserSelfCard';
export const Example1 = () => <UserSelfCard user={families[0]} />;
export const Example2 = () => <UserCard user={families[0]} />;
