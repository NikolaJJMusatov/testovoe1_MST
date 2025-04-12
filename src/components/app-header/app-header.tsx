import { FC } from 'react';
import styles from './app-header.module.css';
import { List } from '../list';
import { Item } from '../item';
import { useState, useEffect } from 'react';

type AppHeaderProps = {
  className?: string
}

export const AppHeader: FC<AppHeaderProps> = ({className}) => {
    const[background, setBackground] = useState<string>('')

    function scroll() {
      scrollY >= 100 ? setBackground('#222') : setBackground('')
    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", scroll);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", scroll);
      };
    });

  return (
    <header className={`${styles.header} ${background}`} style={{background: `${background}`}}>
      <h1 className={styles.header__logo}>SportWay</h1>
      <nav className={styles.header__nav}>
        <List className={className}>
          <Item itemText='Home'></Item>
          <Item itemText='Workouts'></Item>
          <Item itemText='Shop'></Item>
        </List>
      </nav>
    </header>
  )
}

