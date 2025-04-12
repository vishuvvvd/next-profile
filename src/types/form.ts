/* eslint-disable import/no-unused-modules */
/* eslint-disable no-unused-vars */
import { ChangeEventHandler, ReactNode, ChangeEvent, JSX } from 'react';

type BaseType = {
  type?: string;
  style?: object;
  name: string;
  label?: string | JSX.Element;
  required?: boolean;
  helperText?: string;
  className?: string;
  dependent?: string;
  validate?: object;
};

type ValueType = {
  value?: string;
};

type TextFieldVariants = 'outlined' | 'standard' | 'filled';

export type SelectItem = {
  label?: string | JSX.Element;
  value: string | number;
};

type OptionsType = {
  options?: SelectItem[];
  getOptions?: CallableFunction;
  dependencyValue?: string | number | boolean;
};

export type CheckboxType = BaseType & {
  value?: string | number | JSX.Element;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
};

export type CustomType = BaseType &
  ValueType & {
    component?: ReactNode;
  };

export type InputType = BaseType &
  ValueType & {
    variant?: TextFieldVariants;
    placeholder?: string;
    multiline?: boolean;
    rows?: number;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    disabled?: boolean;
  };

export type SelectType = BaseType &
  ValueType &
  OptionsType & {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    onChange?: any;
  };

export type RadioType = BaseType &
  ValueType &
  SelectType &
  OptionsType & {
    onChange?: ChangeEventHandler<HTMLInputElement>;
  };

export type FormDataType = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [key in keyof Record<string, unknown>]?:
    | string
    | number
    | undefined
    | boolean
    | object;
};

export type SchemaType =
  | InputType
  | SelectType
  | CheckboxType
  | RadioType
  | CustomType;

export type FormType = {
  schema: SchemaType[];
  buttonLabel?: string;
  style?: object;
  children?: ReactNode;
  onSubmit?: CallableFunction;
  disableSubmit?: boolean,
  handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
};

