import { ChangeEvent } from "react";

export interface IFields {
  onFieldChange: (
    id: number, 
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>, 
    type: string
  ) => void;
  id: number;
  value: string;
  label: string;
  editLabel: boolean;
  onLabelEdit: () => void;
  onLabelChange: (id: number, e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  removeTextField: (id: number) => void;
};