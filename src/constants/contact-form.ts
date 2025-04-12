import { string } from 'yup';

const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const getRequestAppointmentSchema = () => {
  const contactForm = [
    {
      name: 'fullname',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Full Name (Ex: Viraj Patil)',
      value: '',
      validate: string().required('Please Enter the Full Name'),
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'Email (Ex: viraj@gmail.com)',
      value: '',
      validate: string()
        .matches(strictEmailRegex, 'Please enter a valid email ID')
        .required('Email is required'),
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      multiline: true,
      rows: 3,
      required: true,
      placeholder: 'Description ...',
      value: '',
      validate: string().required('Please Enter valid email ID'),
    },
  ];
  return contactForm;
};

// const contactForm = [
//     {
//       name: 'salutation',
//       label: 'Patient First Name',
//       type: 'select',
//       options: [
//         {
//           label: 'Mr',
//           value: 'Mr'
//         },
//         {
//           label: 'Mrs',
//           value: 'Mrs'
//         },
//         {
//           label: 'Dr',
//           value: 'Dr'
//         },
//       ],
//       value: 'default value',
//       required: true,
//       validate: string().required('')
//     },
//     {
//       name: 'firstName',
//       label: <>&nbsp;</>,
//       type: 'text',
//       required: true,
//       placeholder: 'Patient First Name',
//       value: userDetails.firstName,
//       validate: string().required('Please Enter the First Name')
//     },
//     {
//       name: 'lastName',
//       label: 'Patient Last Name',
//       type: 'text',
//       required: true,
//       placeholder: 'Patient Last Name',
//       value: userDetails.lastName,
//       validate: string().required('Please Enter the Last Name')
//     },
//     {
//       name: 'mobileNumber',
//       label: 'Mobile Number',
//       type: 'text',
//       required: true,
//       placeholder: 'Mobile Number',
//       value: userDetails.mobileNumber,
//       validate: string().matches(/^[0-9]{10}$/,'Please Enter Valid Mobile Number').required('Please Enter the Mobile Number')
//     },
//     {
//       name: 'termsAccepted',
//       type: 'checkbox',
//       value: '',
//       checked: !!userDetails.termsAccepted,
//       required: true,
//       validate: boolean()
//     },
//     {
//       name: 'whatsAppEnabled',
//       type: 'checkbox',
//       value: 'I want to receive the updates through WhatsApp.',
//       checked: !!userDetails.whatsAppEnabled,
//       required: false,
//       validate: boolean()
//     }
// ]
