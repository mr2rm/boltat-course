import React from 'react';
import RouterContext from './RouterContext';

const GoBack = ({ onClick, ...props }) => {
  const { history } = React.useContext(RouterContext);
  const handleClick = e => {
    e.preventDefault();
    history.goBack();
    if (onClick) {
      onClick(e);
    }
  };
  return <a {...props} onClick={handleClick} />;
};

export default GoBack;
