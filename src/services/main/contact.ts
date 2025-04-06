/* eslint-disable import/no-unused-modules */

import { INTERNAL_API } from '@/constants/api';
import API from '@/helpers/fetch';
import { RevalidateOption } from '@/types';

export const getHireMeData = async ({
  revalidate,
  locale,
}: RevalidateOption) => {
  let options = { noAuth: true, next: {} };
  if (revalidate && revalidate === 'true') {
    options = { ...options, next: { revalidate: 0 } };
  }
  const { data = {} } = await API(
    `${INTERNAL_API.HIRE_ME}?locale=${locale}`,
    options
  );
  return data ?? {};
};
