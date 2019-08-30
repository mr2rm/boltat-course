import React from 'react';
import RouterContext from './RouterContext';

const Link = ({ onClick, to, ...props }) => {
  const { history } = React.useContext(RouterContext);
  const handleClick = e => {
    e.preventDefault();
    history.push(to);
    if (onClick) {
      onClick();
    }
  };
  return <a {...props} href={to} onClick={handleClick} />;
};

export default Link;
