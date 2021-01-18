import React from 'react';
import styles from './App.module.css';

import CatFrame from './cat-frame/cat-frame';

function App() {
  return (
    <div className={styles.wrapper}>
      <h2>Here are some cat pictures to make your day better!</h2>
      <CatFrame/>
    </div>
  );
}

export default App;
