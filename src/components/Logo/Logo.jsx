import React from 'react';
import { ReactComponent as LogoSVG } from '../Logo/slimmom.svg';
import { ReactComponent as SlimSVG } from "../Logo/slim.svg";
import { ReactComponent as MomSVG } from "../Logo/mom.svg";
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = ({ className }) => { 
  return (
    <div className={className || styles['logo-container']}>
      <div className={styles['vector-container']}>
        <NavLink to='/Diary'>
          <LogoSVG className={styles.logo} />
        </NavLink>
      </div>
      <div className={styles['text-container']}>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <SlimSVG className={styles.logo} />
        </NavLink>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <MomSVG className={styles.logo} />
        </NavLink>
      </div>
    </div>
  );
};


export default Logo;