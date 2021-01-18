import React, { useState } from 'react';
import styles from './cat-frame.module.css';

import { CatGetter } from './cat-getter';

const CatFrame = () => {
 const [curImg, setCurImg] = useState();


  const handleClick = async () => {
    setCurImg(await CatGetter())
  } 
  return (
    <div className={styles.wrapper}>
      {
        curImg && <img className={styles.catImg} src={curImg} alt='cat img'/>  
      }
      <button onClick={handleClick}>Get cat</button>
      
    </div>
  )
};

export default CatFrame;