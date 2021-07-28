import { Button } from 'antd';
import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound: FC = memo(() => (
  <div className={styles.wrap}>
    <div className={styles.h1}>404</div>
    <h2>OOPS, SORRY WE CAN`T FIND THAT PAGE!</h2>
    <h3 className={styles.h3}>Either something went wrong or the page does not exist anymore</h3>
    <NavLink to="/">
      <Button type="primary">MAIN PAGE</Button>
    </NavLink>
  </div>
));
NotFound.displayName = 'NotFound';

export default NotFound;
