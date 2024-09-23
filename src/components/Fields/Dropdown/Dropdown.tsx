import { useState } from "react";
import { IFields } from "../fields.types";
import { FieldTemplate } from "../../FieldTemplate";
import styles from "./Dropdown.module.css";

const Dropdown: React.FC<IFields> = ({
  onFieldChange,
  id,
  value,
  label,
  editLabel,
  onLabelEdit,
  onLabelChange,
  type,
  removeTextField
}) => {
  const [options, setOptions] = useState(['раз, два']);
  const [valueEdit, setValueEdit] = useState(false);

  const handleValueEdit = () => {
    setValueEdit(valueEdit => !valueEdit)
  };

  return (
    <FieldTemplate
      label={label}
      id={id}
      editLabel={editLabel}
      onLabelEdit={onLabelEdit}
      onLabelChange={onLabelChange}
      removeTextField={removeTextField}
    >
      {
        valueEdit && (
          <input type="text" 
            className={styles.field}
            value={options}
            onChange={(e) => setOptions([e.target.value])}
          />
        )
      }
        {
          !valueEdit && (
            <select
              id={label}
              value={value}
              onChange={(e) => onFieldChange(id, e, type)}
              className={styles.select}
            >
              {
                 options.join('').split(',').map(item => (
                  <option key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))
              }
            </select>
          )
        }
      <button type="button"
        className={styles.button__edit}
        onClick={handleValueEdit}
      >
        {
          valueEdit
          ? 'Завершить, через запятую'
          : 'Править, через запятую'
        }
      </button>
    </FieldTemplate>
  );
};

export { Dropdown };
