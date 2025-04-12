import { useEffect, useState } from 'react';

import {
  Typography,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import key from 'weak-key';

import { SelectItem, SelectType } from '@/types/form';

export default function Select(props: SelectType) {

  const {
    name,
    required = false,
    value = '',
    onChange = () => { },
    label,
    options = [],
    getOptions,
    dependencyValue = '',
    helperText,
  } = props;

  const [selectoptions, setSelectOptions] = useState<SelectItem[]>(options);

  useEffect(() => {
    if (typeof getOptions === 'function') {
      const res = getOptions(dependencyValue);
      setSelectOptions(res);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [dependencyValue]);

  return (
    <>
      {label && <Typography variant="subtitle1" component="label">
        {label}
        {required && <span className="asterisk"> *</span>}
      </Typography>}
      <MuiSelect
        name={name}
        value={value}
        onChange={onChange}
        displayEmpty
      >
        {selectoptions?.map((item: SelectItem) => <MenuItem key={key(item)} value={item.value}>{item.label}</MenuItem>)}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
}
