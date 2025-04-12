import { FC } from 'react';
import styles from './form.module.css'
import { Button } from '../button';

type FormProps = {
  className?: string;
}

export const Form: FC<FormProps> = ({className}) => {

  return (
    <form
      className={`${styles.form} ${className}`}
      name='form'
    >
      <input className={styles.form__input}
        type='name'
        placeholder='Name'
        name='name'
        required
        maxLength={20}
      />
      <input className={styles.form__input}
        type='email'
        placeholder='E-mail'
        name='email'
        required
        maxLength={20}
      />
      <div className={styles.form__container_checkbox}>
        <input className={styles.form__checkbox}
          type="checkbox"
          name='privacy_policy'
          required
        />
        <p className={styles.form__checkbox_text}>
          I accept Privacy policy
        </p>
      </div>
      <Button
        title='Submit Form'
        color='black'
        className={styles.form__button}
      />
    </form>
  )
}