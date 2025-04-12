/* eslint-disable import/no-unused-modules */

import { INTERNAL_API } from '@/constants/api';
import API from '@/helpers/fetch';
import { RevalidateOption } from '@/types';

export const getDevelopersGooDHabbit = async ({
  revalidate,
  locale,
  hostUrl=''
}: RevalidateOption) => {
  let options = { noAuth: true, next: {} };
  if (revalidate && revalidate === 'true') {
    options = { ...options, next: { revalidate: 0 } };
  }
  if(hostUrl){
    hostUrl=hostUrl+'/';
  }
  const { data = [] } = await API(
    `${hostUrl}${INTERNAL_API.DEV_GOOD_HABBITS}?locale=${locale}`,
    options
  );
  return data ?? [];
};
