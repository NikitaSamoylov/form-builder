import { IFields } from "../fields.types";
import { FieldTemplate } from "../../FieldTemplate";
import styles from "./checkbox.module.css";

const Checkbox: React.FC<IFields> = ({
  type,
  value,
  label,
  onFieldChange,
  id,
  editLabel,
  onLabelEdit,
  onLabelChange,
  removeTextField,
}) => {
  return (
    <FieldTemplate
    label={label}
    id={id}
    editLabel={editLabel}
    onLabelEdit={onLabelEdit}
    onLabelChange={onLabelChange}
    removeTextField={removeTextField}
    >
      <input
        className={styles.field}
        type={type}
        value={value}
        id={label}
        onChange={(e) => onFieldChange(id, e, type)}
        checked={value === "true" ? true : false}
      />
    </FieldTemplate>
  );
};

export { Checkbox };
