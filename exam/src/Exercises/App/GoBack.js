import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBack = ({ onClick, history, ...props }) => {
  const handleClick = e => {
    e.preventDefault();
    history.goBack();
    if (onClick) {
      onClick(e);
    }
  };
  return <a {...props} onClick={handleClick} />;
};

// function withRouter(Component) {
//   return function(...args) {
//     return <Component {...args} history={history}/>
//   }
// }

export default withRouter(GoBack);
