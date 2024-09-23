import { ChangeEvent, FormEvent, useState } from 'react';
import { Dropdown } from '../../components/fields/dropdown';
import { Checkbox } from '../../components/fields/checkbox';
import { Text } from '../../components/fields/text';
import { IFormFields } from './form.types';
import { HandleButtons } from '../../components/handle-buttons';
import styles from './Form.module.css';

const Form: React.FC = () => {
  const [textField, setTextField] = useState<IFormFields[]>([]);
  const [editLabel, setEditLabel] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(textField);

    setTextField([]);
  };

  const addTextField = () => {
    setTextField(
      [
        ...textField,
        {
          id: Date.now(),
          type: 'text',
          label: 'Править label (только буквы)',
          value: '',
        }
      ]
    )
  };

  const addCheckbox = () => {
    setTextField(
      [
        ...textField,
        {
          id: Date.now(),
          type: 'checkbox',
          label: 'Править label (только буквы)',
          value: 'true',
        }
      ]
    )
  };

  const addDropDown = () => {
    setTextField(
      [
        ...textField,
        {
          id: Date.now(),
          type: 'select',
          label: 'Править label (только буквы)',
          value: 'Выберите',
        }
      ]
    )
  };

  const removeTextField = (id: number) => {
    setTextField(textField => 
      textField.filter(item => item.id !== id))
  }

  const onFieldChange = (
    id: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: string
  ) => {
    const value = e.target.value;

    setTextField(textField.map(item => 
      item.id === id 
      ? {
        ...item, 
        value: type !== 'checkbox' 
        ? value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/gi, '')
        : item.value === 'true'  
          ? 'false' 
          : 'true'} 
        : item))
  };

  const onLabelEdit = () => {
    setEditLabel(editLabel => !editLabel)
  };

  const onLabelChange = (
    id: number, 
    e: ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const value = e.target.value;

    setTextField(textField.map(item => 
      item.id === id 
      ? {...item, 
        label: value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/gi, '')
      } 
      : item))
  };

  return (
    <div className={styles.widget}>
      <HandleButtons
        addTextField={addTextField}
        addCheckbox={addCheckbox}
        addDropDown={addDropDown}
      />

      <form className={styles.form}
        onSubmit={(e) => onSubmit(e)}
      >
        {
          textField.map(field => (
            <div key={field.id}>
              {
                field.type === 'text' && (
                  <Text
                    type={field.type}
                    value={field.value}
                    id={field.id}
                    onFieldChange={onFieldChange}
                    label={field.label}
                    editLabel={editLabel}
                    onLabelEdit={onLabelEdit}
                    onLabelChange={onLabelChange}
                    removeTextField={removeTextField}
                />
                )
              }
              {
                field.type === 'checkbox' && (
                  <Checkbox
                    type={field.type}
                    value={field.value}
                    id={field.id}
                    onFieldChange={onFieldChange}
                    label={field.label}
                    editLabel={editLabel}
                    onLabelEdit={onLabelEdit}
                    onLabelChange={onLabelChange}
                    removeTextField={removeTextField}
                  />
                )
              }
              {
                field.type === 'select' && (
                  <Dropdown
                    type={field.type}
                    onFieldChange={onFieldChange}
                    id={field.id} 
                    value={field.value}
                    label={field.label}
                    editLabel={editLabel}
                    onLabelEdit={onLabelEdit}
                    onLabelChange={onLabelChange}
                    removeTextField={removeTextField}
                  />
                )
              }
            </div>
          ))
        }
        {
          textField.length !== 0 && (
            <button className={styles.form__button}
              type='submit'>
                Отправить
            </button>
          )
        }
      </form>
    </div>
  )
};

export {Form};