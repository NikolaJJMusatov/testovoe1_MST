import { FC, ReactNode } from 'react';
import styles from './article-content.module.css'

type ArticleContentProps = {
  title?: string;
  children: ReactNode;

}

export const ArticleContent: FC<ArticleContentProps> = ({ children, title } ) => {
  return (
    <article className={styles.sectionContent_1__article}>
      {title && (
        <h2 className={styles.sectionContent_1__articleTitle}>{title}</h2>
      )}
      {children}
    </article>
  )
}