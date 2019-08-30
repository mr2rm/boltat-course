import React from 'react';
import RouterContext from './RouterContext';

const Route = ({ path, exact, children, render, ...props }) => {
  const { history } = React.useContext(RouterContext);
  const pathname = history.location.pathname;

  const shouldRender = exact ? pathname === path : pathname.startsWith(path);
  return shouldRender ? (render ? render() : children) : null;
};

export default Route;
