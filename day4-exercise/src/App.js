import React from 'react';
import styles from './App.module.css';
import {
  Example1 as Exercise1,
  Example2 as Exercise2
} from './Exercises/UserCard';
import { Example as Exercise3 } from './Exercises/UserList';
import { Example as Exercise4 } from './Exercises/App';

function App() {
  return (
    <div className={styles.page}>
      {/* <Exercise1 /> */}
      {/* <Exercise2 /> */}
      <Exercise3 />
      {/* <Exercise4 /> */}
    </div>
  );
}

export default App;
