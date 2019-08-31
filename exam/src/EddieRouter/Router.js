import React from 'react';
import RouterContext from './RouterContext';
import { createBrowserHistory } from 'history';

function useForceUpdate() {
  const [s, setS] = React.useState(0);
  return () => setS(s => s + 1);
}

const Router = ({ children }) => {
  const forceUpdate = useForceUpdate();
  const history = React.useRef(
    createBrowserHistory({
      forceRefresh: false
    })
  );
  history.current.listen(() => {
    forceUpdate();
  });
  return (
    <RouterContext.Provider value={{ history: history.current }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
