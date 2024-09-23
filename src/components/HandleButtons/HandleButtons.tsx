import { Button } from '../Button';
import { THandleButtons } from './hande-buttons.types';
import styles from './HandleButtons.module.css';

const HandleButtons: React.FC<THandleButtons> = ({
  addTextField,
  addCheckbox,
  addDropDown
}) => {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttons__item}>
        <Button text={"Добавить текстовое поле"}
          action={addTextField}
        />
      </div>
      <div className={styles.buttons__item}>
        <Button text={"Добавить Checkbox"}
          action={addCheckbox}
        />
      </div>
      <div className={styles.buttons__item}>
        <Button text={"Добавить DropDown"}
          action={addDropDown}
        />
      </div>
    </div>
  )
};

export {HandleButtons};