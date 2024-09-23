import { TButton } from './button.types';
import styles from './Button.module.css';

const Button: React.FC<TButton> = ({text, action}) => {
  return (
    <button className={styles.button}
      onClick={() => action()}
    >
      {text}
    </button>
  )
};

export {Button};