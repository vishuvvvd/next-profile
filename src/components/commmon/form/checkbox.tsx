import {
  Typography,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  FormHelperText,
} from '@mui/material';

import { CheckboxType } from '@/types/form';

export default function Checkbox(props: CheckboxType) {
  const {
    name,
    required = false,
    value = false,
    onChange,
    label,
    checked,
    helperText,
  } = props;

  return (
    <>
      {label && (
        <Typography variant='subtitle1' component='label'>
          {label}
          {required && <span className='asterisk'> *</span>}
        </Typography>
      )}
      <FormControlLabel
        control={
          <MuiCheckbox name={name} checked={checked} onChange={onChange} />
        }
        label={value}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
}
