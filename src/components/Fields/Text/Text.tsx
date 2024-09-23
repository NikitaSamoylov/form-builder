import { IFields } from "../fields.types";
import { FieldTemplate } from "../../FieldTemplate";
import styles from "./Text.module.css";

const Text: React.FC<IFields> = ({
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
      />
    </FieldTemplate>
  );
};

export { Text };
