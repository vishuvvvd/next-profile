/* eslint-disable import/no-unused-modules */
import { useEffect, useState } from 'react';

import {
  Typography,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio as MuiRadio,
} from '@mui/material';

import { RadioType, SelectItem } from '@/types/form';

export default function Radio(props: RadioType) {

  const {
    name,
    required = false,
    value = '',
    onChange,
    label,
    helperText,
    options = [],
    getOptions,
    dependencyValue = '',
  } = props;

  const [radioOptions, setRadioOptions] = useState<SelectItem[]>(options);

  useEffect(() => {
    if (typeof getOptions === 'function') {
      const res = getOptions(dependencyValue);
      setRadioOptions(res);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [dependencyValue]);

  return (
    <>
      {label && <Typography variant="subtitle1" component="label">
        {label}
        {required && <span className="asterisk"> *</span>}
      </Typography>}
      <RadioGroup row
        name={name}
        value={value}
        onChange={onChange}
      >
        {radioOptions.map(option => <FormControlLabel key={option.value} control={
          <MuiRadio />
        } label={option.label} value={option.value} />)}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
}
