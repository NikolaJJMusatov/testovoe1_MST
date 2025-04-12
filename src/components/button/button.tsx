import { FC } from 'react';
import "./button.css"

type ButtonProps = {
  title: string;
  color: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ title, color, className } ) => {
  return (
    <button className={`button ${color} ${className}`}>
      {title}
    </button>
  )
}
