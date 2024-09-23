import { TFieldTemplate } from './field-template.types';
import styles from './FieldTemplate.module.css';

const FieldTemplate: React.FC<TFieldTemplate> = ({
  label,
  id,
  editLabel,
  onLabelEdit,
  onLabelChange,
  removeTextField,
  children
}) => {
  return (
    <div className={styles.form__item}>
      <label
        className={
          editLabel 
          ? `${styles.label} ${styles.hidden}`
          : styles.label
        }
        htmlFor={label}
        onClick={onLabelEdit}
      >
        {label}
      </label>
      <div
        className={styles.field__content}
      >
        <input
          type="text"
          value={label}
          onChange={(e) => onLabelChange(id, e)}
          className={
            editLabel 
            ? styles.field__edit
            : styles.hidden
          }
        />
        <button
          type="button"
          onClick={() => onLabelEdit()}
          className={
            editLabel 
            ? styles.button
            : styles.hidden
          }
        >
          Завершить правки
        </button>
      </div>
        {children}
        <button
          className={styles.button__remove}
          onClick={() => removeTextField(id)}
        >
          Remove
        </button>
    </div>
  )
};

export {FieldTemplate};