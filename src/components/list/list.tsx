import { FC, ReactNode } from 'react';
import styles from './list.module.css'

type ListProps = {
  children: ReactNode;
  className?: string
}

export const List: FC<ListProps> = ({ children, className } ) => {
  return (
    <ul className={`${styles.list} ${className}`}>
      {children}
    </ul>
  )
}

