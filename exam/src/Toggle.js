import React from 'react';
import Switch from './Switch/Switch';

const ToggleContext = React.createContext();
const useToggleContext = () => {
  const toggleContext = React.useContext(ToggleContext);
  if (!toggleContext)
    throw new Error('This tag should be used inside the <Toggle />');
  return toggleContext;
};

const useToggle = initial => {
  const [value, setValue] = React.useState(initial);
  return [value, () => setValue(v => !v)];
};

const Toggle = ({ children }) => {
  const [on, toggleOn] = useToggle(true);
  return (
    <ToggleContext.Provider value={{ on, toggleOn }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const On = ({ children }) => {
  const { on } = useToggleContext();
  return on ? children : null;
};
export const Off = ({ children }) => {
  const { on } = useToggleContext();
  return on ? null : children;
};
export const Button = () => {
  const { on, toggleOn } = useToggleContext();
  return <Switch on={on} onClick={toggleOn} />;
};
// export const withToggleContext = WrappedComponent => {
//   return props => {
//     const toggleContext = useToggleContext();
//     return <WrappedComponent toggleContext={toggleContext} {...props} />;
//   };
// };
export const ToggleContextConsumer = ToggleContext.Consumer;

export default Toggle;
