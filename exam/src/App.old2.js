import React from 'react';
import Switch from './Switch/Switch';
import './App.css';
import Toggle, { On, Button, Off, ToggleContextConsumer } from './Toggle';

const App = () => {
  return (
    <div className="App">
      <Toggle>
        <On>
          <p>روشن</p>
        </On>
        <ToggleContextConsumer>
          {({ on, toggleOn }) => <p onClick={toggleOn}>{String(on)}</p>}
        </ToggleContextConsumer>
        <Button />
        <Button />
        <Off>
          <p>خاموش</p>
        </Off>
      </Toggle>
    </div>
  );
};

export default App;
