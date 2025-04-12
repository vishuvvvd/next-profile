'use client';
import React from 'react';

import { Box } from '@mui/material';

import { getRequestAppointmentSchema } from '@/constants/contact-form';

import Form from '../commmon/form';

function ContactForm() {
  const scheme = getRequestAppointmentSchema();

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const handleSubmit = () => {
    //TODO:  email sending use formData: any as params from the handle submit
  };

  return (
    <Box>
      <Form
        schema={scheme}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}

export default ContactForm;
