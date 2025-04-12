import { FC } from 'react';
import styles from './app-footer.module.css';
import { List } from '../list';
import { Item } from '../item';
import { Button } from '../button';

type AppFooterProps = {
  className?: string
}

export const AppFooter: FC<AppFooterProps> = () => {

  return (
    <footer className={styles.footer}>
      <List className={styles.footer__list}>
        <Item itemText='home'/>
        <Item itemText='workouts'/>
        <Item itemText='shop'/>
      </List>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_logo}>
          <p className={styles.footer__logo}>SportWay</p>
          <p className={styles.footer__logo_text}>© 2024, Copyright.</p>
        </div>
        <div className={styles.footer__container_links}>
          <div className={styles.footer__container_icons}>
            <a className={styles.footer__link}>
              <img src="icon_1.svg" />
            </a>
            <a className={styles.footer__link}>
              <img src="icon_2.svg" />
            </a>
            <a className={styles.footer__link}>
              <img src="icon_3.svg" />
            </a>
            <a className={styles.footer__link}>
              <img src="icon_4.svg" />
            </a>
            <a className={styles.footer__link}>
              <img src="icon_5.svg" />
            </a>
            <a className={styles.footer__link}>
              <img src="icon_6.svg" />
            </a>
          </div>
          <p className={styles.footer__link_text}>Privacy policy</p>
        </div>
        <div className={styles.footer__container_button}>
          <Button title='order' color='white' className={styles.footer__button}/>
          <p className={styles.footer__button_text}>Terms of Use</p>
        </div>
      </div>
    </footer>
  )
}