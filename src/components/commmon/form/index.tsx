'use client';
import { ChangeEvent, useEffect, useState } from 'react';

import { Box, Button, FormControl, Grid, SelectChangeEvent } from '@mui/material';
import parse from 'html-react-parser';
import { debounce } from 'lodash';
import { useTranslations } from 'next-intl';
import key from 'weak-key';
import { object, ValidationError } from 'yup';

import { button } from '@/assets/styles';
import { dynamicForm } from '@/assets/styles';
import { CheckboxType, CustomType, FormDataType, FormType, SchemaType } from '@/types/form';

import Checkbox from './checkbox';
import Input from './input';
import Radio from './radio';
import Select from './select';

const getFormData = (schema: SchemaType[]) => schema.reduce((acc: FormDataType, field: SchemaType) => {
  if (field?.value !== undefined) {
    if (field.type === 'checkbox') {
      acc[field?.name] = (field as CheckboxType)?.checked;
    } else {
      acc[field?.name] = field.value;
    }
  }
  return acc;
}, {});

export default function Form(props: FormType) {

  const commonTranslate = useTranslations('COMMON');
  const {
    schema = [],
    style: formStyles,
    children,
    buttonLabel = (props?.buttonLabel || commonTranslate('SUBMIT')),
    onSubmit = () => { },
    disableSubmit = false,
  } = props;

  const defaultData = schema.length > 0 ? getFormData(schema) : {};
  const requiredFields = schema.filter((field: SchemaType) => field.required).map((field: SchemaType) => field.name);

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  let validationSchema: any = {}; const validations: any = {};

  const [formData, setFormData] = useState<FormDataType>(defaultData);
  const [formErrors, setFormErrors] = useState<FormDataType>({});
  const [disableButton, setDisableButton] = useState(disableSubmit);

  useEffect(() => {
    const updatedData = schema.length > 0 ? getFormData(schema) : {};
    setFormData(updatedData);
  }, [schema]);

  useEffect(() => {
    if (disableSubmit) {
      const hasFormErrors = Object.keys(formErrors).length > 0;
      const hasRequiredFields = requiredFields.every((field) => formData[field]);
      setDisableButton(hasFormErrors || !hasRequiredFields);
    }
  }, [formData, formErrors, requiredFields, disableSubmit]);

  const validateField = debounce(async (name, value) => {
    try {
      await validationSchema?.validateAt(name, { [name]: value });
      setFormErrors((prevErrors: FormDataType) => {
        const errs = { ...prevErrors };
        delete errs[name];
        return errs;
      });

      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    } catch (err: any) {
      setFormErrors((prevErrors: FormDataType) => ({
        ...prevErrors,
        [name]: err.message,
      }));
    }
  }, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData: FormDataType) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    validateField(name, type === 'checkbox' ? checked : value);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prevData: FormDataType) => ({
      ...prevData,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleReset = ({ reset = false }) => {
    if (reset) {
      setFormData(defaultData);
    }
  };

  const handleSubmit = async () => {
    const vErrors: FormDataType = {};
    try {
      await validationSchema?.validate(formData, { abortEarly: false });
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    } catch (err: any) {
      const errors = err.inner;
      errors.forEach((error: ValidationError) => {
        if (error.path) {
          vErrors[error.path] = error.message;
        }
      });

      setFormErrors(vErrors);
    }

    if (Object.keys(vErrors).length < 1) {
      onSubmit(formData, handleReset);
    }
  };

  const renderField = (field: SchemaType) => {
    const { type, name, ...restProps } = field;
    switch (type) {
    case 'text':
    case 'number':
    case 'email':
    case 'password':
    case 'date':
      return <Input onChange={handleChange} {...{ ...restProps, type, name, value: String(formData[name] || '') }} />;
    case 'checkbox':
      return <Checkbox onChange={handleChange} {...{ ...restProps, name, checked: Boolean(formData[name]) }} />;
    case 'radio':
      return <Radio onChange={handleChange} {...{ ...restProps, name, value: String(formData[name]) }} />;
    case 'select':
      return <Select onChange={handleSelectChange} {...{ ...restProps, name, value: String(formData[name] || '') }} />;
    case 'custom':
      return (field as CustomType)?.component || <></>;
    default:
      return <div>Unsupported field type!</div>;
    }
  };

  return (
    <Grid sx={{ ...dynamicForm, ...formStyles }}>
      <Box className="form-wrapper">
        {schema.map((field: SchemaType, index: number) => {
          const {
            dependent,
            validate,
            name,
            className = '',
            style = {},
            ...rest
          } = field;

          const dependencyValue = dependent ? formData[dependent] : '';

          if (validate) {
            validations[name] = validate;
          }

          if (schema.length - 1 === index) {
            validationSchema = object({ ...validations });
          }

          if (dependent && !dependencyValue) {
            return <input key={key(field)} type="hidden" name={name} />;
          }

          return <FormControl key={key(field)} className={`${name}- wrapper ${className}`} fullWidth sx={style} error={!!formErrors[name]}>
            {renderField({ ...rest, name, helperText: String(formErrors[name] || ''), ...(dependent && { dependencyValue }) })}
          </FormControl>;
        })}
      </Box>
      {children}
      <Box className="form-submit-button-wrapper">
        <Button className="form-submit-button" sx={button} variant='contained' disabled={disableButton} onClick={handleSubmit}>
          {parse(buttonLabel)}
        </Button>
      </Box>
    </Grid >
  );
}
