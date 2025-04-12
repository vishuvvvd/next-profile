import { TextField, Typography } from '@mui/material';

import { InputType } from '@/types/form';

export default function Input(props: InputType) {
  const {
    name,
    type = 'text',
    required = false,
    variant = 'outlined',
    placeholder = '',
    multiline = false,
    rows = 1,
    value,
    onChange,
    label,
    helperText,
    disabled = false
  } = props;

  return (
    <>
      {label && (
        <Typography variant='subtitle1' component='label'>
          {label}
          {required && typeof (label) === 'string' && <span className='asterisk'> *</span>}
        </Typography>
      )}
      <TextField
        type={type}
        required={required}
        name={name}
        variant={variant}
        placeholder={placeholder}
        fullWidth
        multiline={multiline}
        rows={rows}
        value={value}
        onChange={onChange}
        helperText={helperText}
        autoComplete='off'
        error={!!helperText}
        disabled={disabled}
      />
    </>
  );
}
