import styles from './item.module.css'
import { FC } from 'react';

type ItemProps = {
  itemText: string;
  itemNumber?: string;
  className?: string;
}

export const Item: FC<ItemProps> = ({itemText, className, itemNumber}) => {
  return (
    <>
      <li className={`${styles.list__item} ${className}`}>
        {itemNumber && (
          <p className={styles.list__itemNumber}>{itemNumber}</p>
        )}
        {` ${itemText}`}
      </li>
    </>
  )
}