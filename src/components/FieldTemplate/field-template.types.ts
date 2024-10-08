import { ReactNode } from "react";
import { IFields } from "../Fields/fields.types";

export type TFieldTemplate = Pick<
  IFields,
  "label" | "id" | "editLabel" | "onLabelEdit" | "onLabelChange" | "removeTextField"
> & {
  children: ReactNode;
};
